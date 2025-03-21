import EmptyJob from "@/components/layout/placeholder/EmptyJob";
import FilterCard from "@/components/ui/cards/FilterCard";
import JobDetailCard from "@/components/ui/cards/JobDetailCard";
import JobCardSkeleton from "@/components/ui/loader/JobCardSkeleton";
import { ReactNode, useEffect, useRef, useState } from "react";

const Home = (): ReactNode => {
  const [jobs, setJobs] = useState<JobDetailsType[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<JobDetailsType[]>([]);
  const [filterHeight, setFilterHeight] = useState(0);
  const filterRef = useRef<HTMLDivElement>(null);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
  const [loading, setIsLoading] = useState<boolean>(false);
  const [filters, setFilters] = useState<FilterType[]>([
    {
      id: 1,
      name: "Python",
    },
    {
      id: 2,
      name: "Junior",
    },
    {
      id: 3,
      name: "JavaScript",
    },
  ]);

  const handleFilterChange = (updatedFilter: FilterType[]) => {
    setFilters(updatedFilter);
  };

  useEffect(() => {
    const updateHeight = () => {
      if (filterRef.current) {
        setFilterHeight(filterRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/data/data.json");
      const json = await res.json();
      setJobs(json);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (filters.length === 0) {
      setFilteredJobs(jobs);
    } else {
      const filterNames = new Set(filters.map((f) => f.name));
  
      setFilteredJobs(
        jobs.filter((job) =>
          [...job.languages, ...job.tools, job.level, job.role].some((tool) =>
            filterNames.has(tool)
          )
        )
      );
    }
  }, [filters, jobs]);
  

  return (
    <div className="bg-primary relative">
      <div
        ref={filterRef}
        className={`absolute w-full bg-transparent`}
        style={{ top: `-${filterHeight}px` }}
      >
        <FilterCard filters={filters} onChange={handleFilterChange} />
      </div>
      <div
        className="flex flex-col gap-4 py-4"
        style={{ marginTop: `${filterHeight - 70}px` }}
      >
        {/* Try throttling to see the loader */}
        {loading ? (
          <>
            <JobCardSkeleton />
            <JobCardSkeleton />
            <JobCardSkeleton />
          </>
        ) : filteredJobs.length > 0 ? (
          filteredJobs.map((item) => (
            <JobDetailCard
              key={item.id}
              jobDetail={item}
              isSelected={selectedJobId === item.id}
              highlights={filters}
              onClick={() => setSelectedJobId(item.id)}
            />
          ))
        ) : (
          <EmptyJob />
        )}
      </div>
    </div>
  );
};

export default Home;

import EmptyJob from "@/components/layout/placeholder/EmptyJob";
import FilterCard from "@/components/ui/cards/FilterCard";
import JobDetailCard from "@/components/ui/cards/JobDetailCard";
import { ReactNode, useEffect, useRef, useState } from "react";

const Home = (): ReactNode => {
  const [jobs, setJobs] = useState<JobDetailsType[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<JobDetailsType[]>([]);
  const [filterHeight, setFilterHeight] = useState(0);
  const filterRef = useRef<HTMLDivElement>(null);
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
  const [filters, setFilters] = useState<FilterType[]>([
    {
      id: 1,
      name: "Python",
    },
    {
      id: 2,
      name: "React",
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

  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((json) => setJobs(json));
  }, []);

  useEffect(() => {
    const filterNames = new Set(filters.map((f) => f.name));

    setFilteredJobs(
      jobs.filter(
        (job) =>
          job.tools.some((tool) => filterNames.has(tool)) ||
          job.languages.some((lang) => filterNames.has(lang))
      )
    );
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
        {filteredJobs.length > 0 ?
          filteredJobs.map((item) => (
            <JobDetailCard
              key={item.id}
              jobDetail={item}
              isSelected={selectedJobId === item.id}
              highlights={filters}
              onClick={() => setSelectedJobId(item.id)}
            />
          )): <EmptyJob />}
      </div>
    </div>
  );
};

export default Home;

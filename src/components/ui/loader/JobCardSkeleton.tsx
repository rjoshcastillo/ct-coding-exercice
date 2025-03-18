const JobCardSkeleton = () => {
    return (
      <div className="bg-secondary mt-4 p-6 rounded-lg shadow-lg relative flex w-full lg:flex-row flex-col items-start lg:items-center gap-4 animate-pulse">
        {/* Logo Skeleton */}
        <div className="w-16 h-16 bg-gray-300 rounded-full absolute top-[-25px] lg:relative lg:top-0"/>
        {/* Job Info Skeleton */}
        <div className="flex flex-col gap-2 mt-10 lg:mt-0 lg:ml-0 flex-1">
          <div className="flex gap-2 items-center">
            <div className="w-32 h-4 bg-gray-300 rounded"></div>
            <div className="w-12 h-4 bg-gray-300 rounded"></div>
            <div className="w-20 h-4 bg-gray-300 rounded"></div>
          </div>
          <div className="w-48 h-6 bg-gray-300 rounded"></div>
          <div className="flex gap-2 text-gray-500 text-sm">
            <div className="w-16 h-4 bg-gray-300 rounded"></div>
            <div className="w-16 h-4 bg-gray-300 rounded"></div>
            <div className="w-16 h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
  
        {/* Divider */}
        <div className="w-full h-px bg-gray-200 lg:hidden"></div>
  
        {/* Filters Skeleton */}
        <div className="flex flex-wrap gap-2 lg:ml-auto">
          <div className="w-20 h-8 bg-gray-300 rounded"></div>
          <div className="w-20 h-8 bg-gray-300 rounded"></div>
          <div className="w-20 h-8 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  };
  
  export default JobCardSkeleton;
  
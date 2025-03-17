import { ReactNode } from "react";
import { X } from "lucide-react";

const FilterCard = ({ filters, onChange }: FilterCardProps): ReactNode => {
  const handleRemoveFilter = (filterIndex: number) => {
    const updatedFilter = filters.filter((_, index) => filterIndex !== index);
    onChange(updatedFilter);
  };
  const handleClear = () => {
    onChange([]);
  };
  return (
    <div className="flex justify-between w-full bg-secondary rounded-lg shadow-lg border border-gray-200 px-8 py-4 ">
      <div className="flex flex-wrap gap-4">
        {filters.length > 0 ? (
          filters.map((filter, index) => (
            <div
              key={filter.id}
              className="flex bg-primary font-semibold rounded-sm"
            >
              <span className="p-2">{filter.name}</span>
              <button
                onClick={() => handleRemoveFilter(index)}
                className="flex flex-col items-center justify-center bg-tertiary w-[35px] h-[35px] close-filter rounded-r-md"
              >
                <X size={20} color="white" strokeWidth={3} />
              </button>
            </div>
          ))
        ) : (
          <button className="font-semibold py-2">Add Filter</button>
        )}
      </div>
      <button
        className="font-semibold hover:underline cursor-pointer"
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
  );
};

export default FilterCard;

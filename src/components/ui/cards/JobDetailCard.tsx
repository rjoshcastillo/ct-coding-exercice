import Image from "next/image";
import Pills from "../pills/pills";
import { Dot } from "lucide-react";
import { COLORS } from "@/contants/color";

const JobDetailCard = ({
  jobDetail,
  isSelected,
  highlights,
  onClick,
}: JobDetailCardProp & {
  isSelected: boolean;
  highlights: FilterType[];
  onClick: () => void;
}) => {
  const filters = [
    ...new Set([
      ...jobDetail.languages,
      ...jobDetail.tools,
      jobDetail.level,
      jobDetail.role,
    ]),
  ];
  return (
    <div
      className={`bg-secondary mt-4 p-6 rounded-lg shadow-lg relative flex w-full lg:flex-row flex-col items-start lg:items-center gap-4
    ${isSelected ? "border-l-4 border-primary" : ""}`}
      onClick={onClick}
    >
      {/* Logo */}
      <Image
        src={jobDetail.logo}
        className="w-16 h-16 absolute top-[-20px] left-4 lg:left-0 lg:relative lg:top-0"
        alt="Job Logo"
        width={64}
        height={64}
      />

      {/* Job Info */}
      <div className="flex flex-col gap-2 mt-10 lg:mt-0 lg:ml-0 flex-1">
        <div className="flex gap-2 items-center">
          <span className="text-primary font-bold">{jobDetail.company}</span>
          {jobDetail.new && (
            <Pills
              text={jobDetail.new ? "NEW!" : ""}
              color={COLORS.secondary}
            />
          )}
          {jobDetail.featured && (
            <Pills
              text={jobDetail.featured ? "FEATURED" : ""}
              color={COLORS.dark500}
            />
          )}
        </div>
        <p
          className={`${
            isSelected ? "text-primary" : "text-dark"
          } text-lg font-bold`}
        >
          {jobDetail.position}
        </p>
        <div className="text-gray-500 text-sm flex gap-2">
          <div className="flex items-center gap-1">
            <span>{jobDetail.postedAt}</span>
          </div>
          <Dot size={24} />
          <div className="flex items-center gap-1">
            <span>{jobDetail.contract}</span>
          </div>
          <Dot size={24} />
          <div className="flex items-center gap-1">
            <span>{jobDetail.location}</span>
          </div>
        </div>
      </div>

      {/* Divider  */}
      <div className="w-full h-px bg-gray-200 lg:hidden"></div>

      {/* Job Filters */}
      <div className="flex flex-wrap gap-2 lg:ml-auto">
        {filters.map((item) => (
          <button
            key={item}
            className={`px-4 py-2 flex font-semibold rounded-sm ${
              highlights.some((highlight) => highlight.name === item)
                ? "bg-tertiary text-white"
                : "bg-primary"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobDetailCard;

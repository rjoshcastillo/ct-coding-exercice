type FilterType = {
  id: number,
  name: string
}

type FilterCardProps = {
    filters: FilterType[]
    onChange: (_value: FilterType[]) => void
}

type JobDetailsType = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

type JobDetailCardProp = {
  jobDetail: JobDetailsType;
};

interface PillProps {
  text: string;
  color: string
}

const Pills = ({ text, color }: PillProps) => {
  return (
    <div className="text-secondary rounded-xl flex items-center text-[10px] w-auto px-2 h-[25px] justify-center" style={{ backgroundColor: color }}>
      <span className="mt-1">{text}</span>
    </div>
  );
};

export default Pills;

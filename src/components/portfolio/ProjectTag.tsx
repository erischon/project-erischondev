type ProjectTagProps = {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
};

const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
  const buttonStyles = isSelected
    ? "text-slate-100 border-b-2 border-amber-400"
    : "text-slate-100/70 hover:text-slate-100";

  return (
    <button
      className={`${buttonStyles} px-4 py-2 cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;

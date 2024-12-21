import { CircleStackIcon } from "@heroicons/react/24/outline";

const RepositoryItem = ({ title, type, language, size, updatedAt, isLast }) => {
  return (
    <div
      className={`flex flex-col p-4 gap-3 hover:bg-gray-100 cursor-pointer ${!isLast ? "border-b" : "" }`}
    >
      <div className="flex items-center gap-2">
        <span>{title}</span>
        <span className="bg-slate-300  border border-slate-400 text-primary text-xs px-2 rounded-full">
          {type}
        </span>
      </div>
      <div className="flex gap-4 md:gap-8 text-sm font-light">
        <span className="flex items-center gap-2">
          {language}
          <span className="bg-slate-200 p-1 rounded-full" />
        </span>
        <span className="flex items-center gap-2">
          <CircleStackIcon className="w-4 h-4" />
          {size}
        </span>
        <span>{updatedAt}</span>
      </div>
    </div>
  );
};

export default RepositoryItem;

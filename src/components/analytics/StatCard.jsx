const StatCard = ({ title, value, icon, description, active }) => {
  return (
    <div
      className={`
        group
        rounded-2xl
        border-2
        bg-white
        backdrop-blur-md
        p-2
        transition-all
        duration-300
        hover:-translate-y-1
        ${
          active
            ? "border-indigo-500 shadow-lg shadow-indigo-500/10"
            : "border-transparent hover:border-indigo-300"
        }
      `}
    >
      <div className="flex items-center gap-3">
        <div
          className={`rounded-xl p-3 transition-colors duration-300 ${
            active
              ? "bg-indigo-500 text-white"
              : "bg-emerald-500/10 text-emerald-500"
          }`}
        >
          {icon}
        </div>

        <h3 className="text-sm font-medium text-slate-600">{title}</h3>
      </div>

      <h2 className="mt-4 text-3xl font-bold text-slate-700">{value}</h2>

      <p className="mt-2 text-xs text-gray-500">{description}</p>
    </div>
  );
};

export default StatCard;

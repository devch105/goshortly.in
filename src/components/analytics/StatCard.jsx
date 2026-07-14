const StatCard = ({ title, value, icon, description }) => {
  return (
    <div
      className="
        group
        rounded-2xl
        border border-white/10
        bg-white
        backdrop-blur-md
        p-2
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-emerald-500/60
        hover:shadow-lg
        hover:shadow-emerald-500/10
      "
    >
      <div className="flex items-center justify-start gap-2">
        <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-400">
          {icon}
        </div>
        <h3 className="mt-5 text-sm font-medium text-slate-600">{title}</h3>
      </div>

      <h2 className="mt-2 text-3xl font-bold text-slate-600">
        {value.toLocaleString()}
      </h2>

      <p className="mt-2 text-xs text-gray-500">{description}</p>
    </div>
  );
};

export default StatCard;

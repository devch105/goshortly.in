import { Plus } from "lucide-react";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const DashboardHeader = () => {
  const { user, clearUser } = useContext(AppContext);
  console.log(user);
  return (
    <div
      className="mt-2 px-8 py-2 fixed top-0 left-0 w-full z-50
    bg-white/10
    backdrop-blur-xl
    border-b border-white/20
    shadow-lg
    rounded-md
    "
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-gray-400">
            Track your shortened URLs, monitor click trends, and analyze
            performance in real time.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-emerald-400">
            <Plus size={18} />
            New URL
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;

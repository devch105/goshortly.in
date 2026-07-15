import { Link2, MousePointerClick } from "lucide-react";
import StatCard from "./StatCard";

const AnalyticsCards = ({
  totalClicks,
  activeUrls,
  activeSection,
  setActiveSection,
}) => {
  return (
    <div className="card bg-white border border-gray-200 rounded-xl shadow-lg p-5 sm:p-6 lg:p-8 h-full">
      <div className="flex flex-col sm:flex-row gap-4 h-full">
        <div
          className="flex-1 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
          onClick={() => setActiveSection("chart")}
        >
          <StatCard
            className={
              activeSection === "chart" ? "border border-indigo-500" : ""
            }
            title="Total Clicks"
            value={totalClicks}
            icon={<MousePointerClick size={22} />}
            description="Total clicks across all URLs"
            active={activeSection === "chart"}
          />
        </div>

        <div
          className="flex-1 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
          onClick={() => setActiveSection("urls")}
        >
          <StatCard
            className={
              activeSection === "urls" ? "border border-indigo-500" : ""
            }
            title="Active URLs"
            value={activeUrls}
            icon={<Link2 size={22} />}
            description="Currently active shortened URLs"
            active={activeSection === "urls"}
          />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCards;

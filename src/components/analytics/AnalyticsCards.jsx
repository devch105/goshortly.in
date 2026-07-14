import { BarChart3, Link2, MousePointerClick, QrCode } from "lucide-react";

import StatCard from "./StatCard";

const AnalyticsCards = () => {
  const analytics = {
    totalClicks: 1245,
    activeUrls: 18,
    averageClicks: 69,
    qrScans: 312,
  };

  return (
    <div className="mt-25 w-full backdrop-blur-xl border-b border-white/20 shadow-lg z-0 rounded-md">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4 p-2">
        <StatCard
          title="Total Clicks"
          value={analytics.totalClicks}
          icon={<MousePointerClick size={22} />}
          description="Total clicks across all URLs"
        />

        <StatCard
          title="Active URLs"
          value={analytics.activeUrls}
          icon={<Link2 size={22} />}
          description="Currently active shortened URLs"
        />

        <StatCard
          title="Avg. Clicks"
          value={analytics.averageClicks}
          icon={<BarChart3 size={22} />}
          description="Average clicks per URL"
        />

        <StatCard
          title="QR Scans"
          value={analytics.qrScans}
          icon={<QrCode size={22} />}
          description="Scans generated via QR codes"
        />
      </div>
    </div>
  );
};

export default AnalyticsCards;

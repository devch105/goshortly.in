import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { ANALYTICS } from "../utils/apiEndpoints";
import privateApi from "../utils/privateApi";
import AnalyticsCards from "./analytics/AnalyticsCards";
import DashboardHeader from "./analytics/DashboardHeader";
import ClickTrendChart from "./analytics/ClickTrendChart";


const Dashboard = () => {
  const [clickTrend, setClickTrend] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchClickAnalyticsByDate = async () => {
    setLoading(true);

    try {
      const now = new Date();

      const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);

      const formatDate = (date) => date.toISOString().split("T")[0];

      const response = await privateApi.get(ANALYTICS.TOTAL_CLICKS, {
        params: {
          startDate: formatDate(startDate),
          endDate: formatDate(endDate),
        },
      });

      console.log("Response:", response);
      console.log("Response Data:", response.data);

      const chartData = Object.entries(response.data).map(([date, clicks]) => ({
        date,
        clicks,
      }));

      setClickTrend(chartData);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load analytics");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchClickAnalyticsByDate();
  }, []);

  return (
    <div className="lg:px-14 sm:px-8 min-h-[calc(100vh-64px)]">
      <DashboardHeader />
      <AnalyticsCards />

      <div className="mt-8">
        <ClickTrendChart
          title="Total Click Trend"
          description="Daily clicks across all your shortened URLs."
          data={clickTrend}
        />
      </div>
    </div>
  );
};

export default Dashboard;

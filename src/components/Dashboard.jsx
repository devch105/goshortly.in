import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import UrlAnalyticsChart from "../components/analytics/UrlAnalyticsChart";
import { ANALYTICS, URLS } from "../utils/apiEndpoints";
import privateApi from "../utils/privateApi";
import ActiveUrlList from "./ActiveUrlList";
import AnalyticsCards from "./analytics/AnalyticsCards";
import ClickTrendChart from "./analytics/ClickTrendChart";
import DashboardHeader from "./analytics/DashboardHeader";
import CreateShortUrl from "./CreateShortUrl";

import { useMemo } from "react";

const Dashboard = () => {
  const [clickTrend, setClickTrend] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState("chart");
  const [activeUrls, setActiveUrls] = useState([]);
  const [loadingUrls, setLoadingUrls] = useState(false);
  const [selectedAnalytics, setSelectedAnalytics] = useState(null);

  const fetchActiveUrls = async () => {
    setLoadingUrls(true);

    try {
      const response = await privateApi.get(URLS.LIST);

      if (response.status === 200) {
        setActiveUrls(response.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load active URLs");
    } finally {
      setLoadingUrls(false);
    }
  };

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
      const chartData = Object.entries(response.data)
        .map(([date, clicks]) => ({
          date,
          clicks,
        }))
        .sort((a, b) => new Date(a.date) - new Date(b.date));

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
    fetchActiveUrls();
  }, []);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const { totalUrls, totalClicks } = useMemo(() => {
    return activeUrls.reduce(
      (stats, url) => {
        stats.totalUrls++;
        stats.totalClicks += url.clickCount;
        return stats;
      },
      {
        totalUrls: 0,
        totalClicks: 0,
      },
    );
  }, [activeUrls]);

  return (
    <div className="min-h-screen px-8 pt-24 lg:px-14 bg-slate-50">
      <DashboardHeader />
      <div className="w-full mt-20 flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:flex-1">
          <CreateShortUrl />
        </div>

        <div className="w-full lg:flex-1">
          <AnalyticsCards
            totalClicks={totalClicks}
            activeUrls={totalUrls}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>
      </div>

      {selectedAnalytics ? (
        <UrlAnalyticsChart
          data={selectedAnalytics.analytics}
          url={selectedAnalytics}
          onBack={() => setSelectedAnalytics(null)}
        />
      ) : (
        <>
          {activeSection === "chart" && (
            <div className="mt-8 card">
              <ClickTrendChart
                title="Total Click Trend"
                description="Daily clicks across all your shortened URLs."
                data={clickTrend}
              />
            </div>
          )}
        </>
      )}

      {activeSection === "urls" && (
        <div className="mt-8">
          <ActiveUrlList
            urls={activeUrls}
            loading={loadingUrls}
            fetchUrls={fetchActiveUrls}
            onAnalyticsLoaded={setSelectedAnalytics}

          />
        </div>
      )}
    </div>
  );
};

export default Dashboard;

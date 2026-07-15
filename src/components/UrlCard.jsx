import { ChartNoAxesCombined, Copy, Trash2 } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { URLS } from "../utils/apiEndpoints";
import privateApi from "../utils/privateApi";

const UrlCard = ({ url, fetchUrls, onAnalyticsLoaded }) => {
  const [loading, setLoading] = useState(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url.shortUrl);
      toast.success("Copied to clipboard");
    } catch (error) {
      toast.error("Copy failed");
    }
  };

  const handleDeleteUrl = async () => {
    setLoading(true);
    try {
      const response = await privateApi.delete(URLS.DELETE(url.shortCode));
      if (response.status === 200) {
        toast.success(response.data);
        fetchUrls();
      }
    } catch (error) {
      toast.error("Error in deleting URL");
    } finally {
      setLoading(false);
    }
  };

  const getDateRange = () => {
    const now = new Date();

    // First day of current month (00:00:00)
    const start = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0);

    // Last day of current month (23:59:59)
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);

    return {
      startDate: start.toISOString().slice(0, 19),
      endDate: end.toISOString().slice(0, 19),
    };
  };

  const handleAnalytics = async () => {
    try {
      const { startDate, endDate } = getDateRange();

      const response = await privateApi.get(
        `/urls/analytics/${url.shortCode}`,
        {
          params: { startDate, endDate },
        },
      );

      onAnalyticsLoaded({
        originalUrl: url.originalUrl,
        shortCode: url.shortCode,
        analytics: response.data,
      });
    } catch (error) {
      toast.error("Failed to load analytics");
    }
  };
  return (
    <div className="rounded-xl bg-white shadow-md border border-gray-200 p-6 transition hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-xs lg:text-sm text-gray-500">Original URL</p>

          <h3
            className="truncate text-xs lg:text-sm font-semibold text-gray-800"
            title={url.longUrl}
          >
            {url.longUrl}
          </h3>
        </div>

        <button
          onClick={handleAnalytics}
          title="Analytics"
          className="shrink-0 flex items-center justify-center gap-2 rounded-lg bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 transition-all duration-200 hover:bg-indigo-100 hover:shadow-sm"
        >
          <ChartNoAxesCombined size={18} />
          <span className="hidden sm:inline">Analytics</span>
        </button>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="mt-1 flex-1 mr-3">
          <p className="text-sm text-gray-500">Short URL</p>

          {/* <p className="text-emerald-600 font-semibold">{url.shortUrl}</p> */}
          <input
            readOnly
            value={url.shortUrl}
            className="w-full rounded-lg border bg-white px-3 py-2 outline-none"
          />
        </div>
        <div className="flex  gap-5 mt-3">
          <button
            onClick={copyToClipboard}
            className=" cursor-pointer hover:scale-125 transition-all duration-300 text-blue-600"
          >
            {loading ? (
              "..."
            ) : (
              <>
                {" "}
                <Copy size={18} />
              </>
            )}
          </button>

          <button
            onClick={handleDeleteUrl}
            className="text-red-700   cursor-pointer hover:scale-125 transition-all duration-300"
          >
            {loading ? (
              "..."
            ) : (
              <>
                {" "}
                <Trash2 size={18} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UrlCard;

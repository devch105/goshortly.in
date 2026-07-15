import { ArrowLeft, MousePointerClick } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const UrlAnalyticsChart = ({ data, url, onBack }) => {
  const totalClicks = data.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="mt-10 rounded-xl border border-gray-200 bg-white p-5 shadow-lg">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <button
            onClick={onBack}
            className="mb-3 flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            <ArrowLeft size={16} />
            Back to Overall Analytics
          </button>

          <h2 className="text-xl font-semibold text-slate-800">
            URL Analytics
          </h2>

          <p className="mt-1 break-all text-sm text-slate-500">
            {url.originalUrl}
          </p>
        </div>

        <div className="rounded-xl border bg-indigo-50 px-5 py-3">
          <div className="flex items-center gap-2 text-indigo-600">
            <MousePointerClick size={18} />
            <span className="text-sm font-medium">Total Clicks</span>
          </div>

          <h3 className="mt-1 text-3xl font-bold text-slate-700">
            {totalClicks}
          </h3>
        </div>
      </div>

      {/* Chart */}

      <div className="h-[340px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={[...data].reverse()}
            margin={{
              top: 10,
              right: 20,
              left: 0,
              bottom: 10,
            }}
          >
            <defs>
              <linearGradient id="clickGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366F1" stopOpacity={0.45} />

                <stop offset="100%" stopColor="#6366F1" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              opacity={0.2}
            />

            <XAxis
              dataKey="clickDate"
              tick={{
                fontSize: 12,
                fontWeight: 600,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              allowDecimals={false}
              tick={{
                fontSize: 12,
                fontWeight: 600,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="count"
              stroke="#6366F1"
              strokeWidth={3}
              fill="url(#clickGradient)"
              activeDot={{
                r: 6,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UrlAnalyticsChart;

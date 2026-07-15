import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-2xl border border-white/10 bg-white px-4 py-3 shadow-xl backdrop-blur-xl">
      <p className="text-xs font-medium text-gray-400">{label}</p>

      <div className="mt-2 flex items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-indigo-400" />

        <span className="text-sm font-semibold text-slate-600">
          {payload[0].value.toLocaleString()} Clicks
        </span>
      </div>
    </div>
  );
};

const ClickTrendChart = ({
  title = "Click Trend",
  description = "Daily clicks across all shortened URLs.",
  data = [],
}) => {
  const totalClicks = data.reduce((sum, item) => sum + item.clicks, 0);

  const formattedData = data.map((item) => ({
    ...item,
    date: new Date(item.date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
    }),
  }));

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-600">{title}</h2>

          <p className="mt-1 text-sm text-gray-400">{description}</p>
        </div>

        <div className="text-right">
          <p className="text-xs uppercase tracking-widest text-gray-500">
            Total Clicks
          </p>

          <h2 className="text-3xl font-bold text-indigo-400">
            {totalClicks.toLocaleString()}
          </h2>
        </div>
      </div>

      <div className="h-[380px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={formattedData}
            margin={{
              top: 5,
              right: 5,
              left: -25,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="clickGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366F1" stopOpacity={0.35} />

                <stop offset="100%" stopColor="#6366F1" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              angle={-73}
              textAnchor="end"
              interval={0}
              height={70}
              tick={{
                fill: "#64748B",
                fontSize: 13,
                fontWeight: 600,
              }}
            />

            <YAxis
              allowDecimals={false}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => value}
              tick={{
                fill: "#64748B",
                fontSize: 13,
                fontWeight: 600,
              }}
            />

            <Tooltip
              cursor={{
                stroke: "#6366F1",
                strokeWidth: 2,
                strokeOpacity: 0.3,
              }}
              content={<CustomTooltip />}
            />

            <Area
              type="natural"
              dataKey="clicks"
              stroke="#6366F1"
              strokeWidth={3}
              fill="url(#clickGradient)"
              dot={false}
              activeDot={{
                r: 6,
                fill: "#6366F1",
                stroke: "#fff",
                strokeWidth: 2,
              }}
              animationDuration={1200}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ClickTrendChart;

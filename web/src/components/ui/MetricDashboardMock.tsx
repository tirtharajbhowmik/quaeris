import { brand } from "@/config/brand.config";

export default function MetricDashboardMock() {
  const { dashboard } = brand.darkFeature;

  return (
    <div className="metric-dashboard">
      <div className="metric-dashboard-header">
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "16px",
            color: "var(--text-on-dark)",
            fontWeight: 450,
          }}
        >
          {dashboard.title}
        </span>
        <span>{dashboard.period}</span>
      </div>
      <div className="metric-tiles" role="group" aria-label="Metric tiles">
        {dashboard.tiles.map((tile) => (
          <div
            key={tile.label}
            className={`metric-tile${tile.active ? " active" : ""}`}
            tabIndex={0}
          >
            <div className="metric-tile-label">{tile.label}</div>
            <div className="metric-tile-value">{tile.value}</div>
            <div className="metric-tile-delta">{tile.delta}</div>
          </div>
        ))}
      </div>
      <div className="mini-chart">
        <svg
          viewBox="0 0 280 80"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6754E9" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6754E9" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,70 L30,58 L60,50 L90,42 L120,38 L150,30 L180,20 L210,25 L240,15 L280,10 L280,80 L0,80 Z"
            fill="url(#chartGrad)"
          />
          <path
            d="M0,70 L30,58 L60,50 L90,42 L120,38 L150,30 L180,20 L210,25 L240,15 L280,10"
            fill="none"
            stroke="#6754E9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="280" cy="10" r="4" fill="#6754E9" />
        </svg>
      </div>
      <p className="chart-caption">{dashboard.caption}</p>
    </div>
  );
}

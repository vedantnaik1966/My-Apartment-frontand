function UsageCard({
  title,
  percentage,
  description,
  type = "energy",
}) {
  const chartPoints = type === "water"
    ? "0,25 9,22 18,28 27,15 36,23 45,19 54,27 63,11 72,18 81,25 90,16 99,21 108,12 117,20 126,15 135,25 144,19 153,23 162,14 171,20 180,18"
    : "0,24 9,18 18,25 27,11 36,17 45,21 54,15 63,27 72,23 81,13 90,20 99,25 108,16 117,22 126,10 135,18 144,14 153,24 162,17 171,22 180,15";

  return (
    <div className="usage-card">
      <div className="usage-header">
        <h3>{title}</h3>
        <span>This Month⌄</span>
      </div>

      <div className="usage-value">
        {percentage}%
      </div>

      <div className="usage-description">
        <p>{description}</p>
        {percentage >= 80 && (
          <span className={`usage-goal ${type}`}>
            Make it 100%
          </span>
        )}
      </div>

      <div className="progress">
        <div
          className={`progress-bar ${type}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <div className="usage-labels">
        <span>0%</span>
        <span>100%</span>
      </div>

      <svg
        className={`usage-chart ${type}`}
        viewBox="0 0 180 32"
        preserveAspectRatio="none"
        role="img"
        aria-label={`${title} trend over this month`}
      >
        <polyline points={chartPoints} />
      </svg>
    </div>
  );
}

export default UsageCard;
import {
  Users,
  WalletCards,
  MessageCircleWarning,
  HeartPulse,
} from "lucide-react";

const icons = {
  residents: Users,
  maintenance: WalletCards,
  complaints: MessageCircleWarning,
  health: HeartPulse,
};

function StatCard({
  type,
  title,
  value,
  subtitle,
  color = "purple",
}) {
  const Icon = icons[type] || Users;

  return (
    <div className="stat-card">
      <div className={`stat-icon ${color}`}>
        <Icon size={22} />
      </div>

      <div className="stat-content">
        <p>{title}</p>
        <h2>{value}</h2>
        <span>{subtitle}</span>
      </div>
    </div>
  );
}

export default StatCard;
import {
  MessageSquareWarning,
  CreditCard,
  Building2,
  UserPlus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function QuickActions() {
  const navigate = useNavigate();
  const actions = [
    {
      title: "Raise Complaint",
      icon: MessageSquareWarning,
      color: "purple",
      path: "/complaints",
    },
    {
      title: "Make Payment",
      icon: CreditCard,
      color: "green",
      path: "/payments",
    },
    {
      title: "Book Facility",
      icon: Building2,
      color: "blue",
      path: "/facilities",
    },
    {
      title: "Invite Visitor",
      icon: UserPlus,
      color: "orange",
      path: "/visitors",
    },
  ];

  return (
    <div className="quick-actions">
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <button className="quick-action" key={action.title} onClick={() => navigate(action.path)}>
            <div className={`quick-icon ${action.color}`}>
              <Icon size={21} />
            </div>

            <span>{action.title}</span>
          </button>
        );
      })}
    </div>
  );
}

export default QuickActions;

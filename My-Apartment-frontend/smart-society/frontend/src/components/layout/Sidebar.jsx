import { NavLink, Link } from "react-router-dom";

import {
  LayoutDashboard,
  Home,
  Users,
  MessageSquareWarning,
  CreditCard,
  UserRoundCheck,
  Building2,
  Megaphone,
  UsersRound,
  Car,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  FileText,
  Sparkles,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "My Home",
    path: "/profile",
    icon: Home,
  },
  {
    name: "Residents",
    path: "/residents",
    icon: Users,
  },
  {
    name: "Complaints",
    path: "/complaints",
    icon: MessageSquareWarning,
  },
  {
    name: "Payments",
    path: "/payments",
    icon: CreditCard,
  },
  {
    name: "Visitors",
    path: "/visitors",
    icon: UserRoundCheck,
  },
  {
    name: "Facilities",
    path: "/facilities",
    icon: Building2,
  },
  {
    name: "Notices",
    path: "/notices",
    icon: Megaphone,
  },
  {
    name: "Community",
    path: "/community",
    icon: UsersRound,
  },
  {
    name: "Parking",
    path: "/parking",
    icon: Car,
  },
  {
    name: "Security",
    path: "/security",
    icon: ShieldCheck,
  },
];

function Sidebar() {
  return (
    <>
      <aside className="sidebar">

        {/* LOGO */}
        <div className="logo-section">

          <div className="logo-icon">
            <Building2 size={27} />
          </div>

          <div>
            <h2>MY</h2>
            <h3>APARTMENT</h3>
            <span>Better Living. Together.</span>
          </div>

        </div>


        {/* MENU */}
        <nav className="sidebar-menu">

          {menuItems.map((item) => {

            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </NavLink>
            );

          })}

        </nav>


        {/* BOTTOM */}
        <div className="sidebar-bottom">

          <div className="promo-card">

            <div className="promo-icon">

              <div className="promo-glow" />

              <Building2
                className="promo-building"
                size={31}
              />

              <FileText
                className="promo-document"
                size={18}
              />

              <ShieldCheck
                className="promo-shield"
                size={15}
              />

              <Sparkles
                className="promo-sparkle"
                size={12}
              />

            </div>


            <h3>Apartment Living</h3>
            <h3>Made Simple</h3>

            <p>
              Manage your apartment society from one
              powerful platform.
            </p>


            {/* EXPLORE FEATURES */}
            <Link
              to="/features"
              className="explore-features-btn"
            >
              Explore Features
              <ArrowRight size={13} />
            </Link>

          </div>


          {/* HELP */}
          <a
            className="help"
            href="mailto:support@myapartment.com"
          >
            <HelpCircle size={18} />
            <span>Help & Support</span>
          </a>

        </div>

      </aside>


      {/* =====================================================
          EXPLORE FEATURES CSS
      ===================================================== */}

      <style>{`

        .explore-features-btn {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 6px;

          padding: 8px 12px;

          border-radius: 7px;

          background:
            linear-gradient(
              135deg,
              #6842df,
              #7c4ee5
            );

          color: white;

          text-decoration: none;

          font-size: 10px;

          font-weight: 600;

          cursor: pointer;

          transition:
            transform 0.15s ease,
            box-shadow 0.15s ease;
        }


        /* Mouse cursor is over the button */
        .explore-features-btn:hover {

          transform: scale(1.01);

          box-shadow:
            0 4px 12px
            rgba(124, 78, 229, 0.25);
        }


        /* Arrow moves slightly */
        .explore-features-btn:hover svg {

          transform: translateX(2px);
        }


        .explore-features-btn svg {

          transition:
            transform 0.15s ease;
        }

      `}</style>
    </>
  );
}

export default Sidebar;

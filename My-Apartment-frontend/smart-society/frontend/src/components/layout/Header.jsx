import {
  Bell,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  User,
  UserCircle,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header({ user, onLogout }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* =========================
          HEADER
      ========================== */}

      <header className="header">

        {/* TOP TABS */}
        <div className="top-tabs">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "tab active" : "tab"
            }
          >
            Overview
          </NavLink>

          <NavLink
            to="/activity"
            className={({ isActive }) =>
              isActive ? "tab active" : "tab"
            }
          >
            Activity
          </NavLink>

          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              isActive ? "tab active" : "tab"
            }
          >
            Calendar
          </NavLink>

          <NavLink
            to="/reports"
            className={({ isActive }) =>
              isActive ? "tab active" : "tab"
            }
          >
            Reports
          </NavLink>

        </div>


        {/* RIGHT SIDE */}
        <div className="header-right">

          {/* NOTIFICATION */}
          <button className="header-icon notification">
            <Bell size={20} />
            <span>3</span>
          </button>


          {/* MESSAGE */}
          <button className="header-icon">
            <MessageSquare size={20} />
          </button>


          {/* PROFILE */}
          <div className="profile-menu">

            <button
              className="profile"
              onClick={() => setShowMenu(!showMenu)}
            >

              <div className="profile-avatar">
                <User size={22} />
              </div>

              <div className="profile-info">
                <strong>{user?.name || "Arjun Mehta"}</strong>
                <small>{user?.flat || "Flat A-1203"} · {user?.role || "Resident"}</small>
              </div>

              {showMenu ? (
                <ChevronUp size={17} />
              ) : (
                <ChevronDown size={17} />
              )}

            </button>


            {/* PROFILE DROPDOWN */}
            {showMenu && (
              <div className="profile-dropdown">

                <button className="profile-dropdown-item">
                  <UserCircle size={18} />
                  <span>Profile</span>
                </button>

                <button className="profile-dropdown-item logout" onClick={onLogout}>
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>

              </div>
            )}

          </div>

        </div>

      </header>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* =====================================================
           PROFILE MENU
        ===================================================== */

        .profile-menu {
          position: relative;
          display: inline-block;
        }


        /* =====================================================
           PROFILE BUTTON
        ===================================================== */

        .profile-menu .profile {
          display: flex;
          align-items: center;
          gap: 9px;

          padding: 5px 7px;

          border: none;
          outline: none;

          border-radius: 10px;

          background: transparent;

          color: white;

          cursor: pointer;

          font-family: inherit;

          transition: background 0.2s ease;
        }

        .profile-menu .profile:hover {
          background: rgba(255, 255, 255, 0.06);
        }


        /* =====================================================
           PROFILE AVATAR
        ===================================================== */

        .profile-menu .profile-avatar {
          width: 40px;
          height: 40px;

          min-width: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: linear-gradient(
            135deg,
            #e7b77b,
            #d49a5d
          );

          color: white;

          box-shadow:
            0 4px 12px rgba(0, 0, 0, 0.18);
        }


        /* =====================================================
           PROFILE TEXT
        ===================================================== */

        .profile-menu .profile-info {
          display: flex;

          flex-direction: column;

          align-items: flex-start;

          justify-content: center;

          min-width: 90px;
        }

        .profile-menu .profile-info strong {
          display: block;

          margin: 0;

          color: #ffffff;

          font-size: 13px;

          font-weight: 700;

          line-height: 16px;
        }

        .profile-menu .profile-info small {
          display: block;

          margin-top: 1px;

          color: #9da9c2;

          font-size: 9px;

          line-height: 12px;
        }


        /* =====================================================
           DROPDOWN
        ===================================================== */

        .profile-dropdown {
          position: absolute;

          top: calc(100% + 9px);

          right: 0;

          width: 145px;

          padding: 6px;

          background: #111d33;

          border: 1px solid rgba(255, 255, 255, 0.09);

          border-radius: 10px;

          box-shadow:
            0 15px 35px rgba(0, 0, 0, 0.35);

          z-index: 99999;

          animation: profileDropdown 0.18s ease;
        }


        /* =====================================================
           DROPDOWN ARROW
        ===================================================== */

        .profile-dropdown::before {
          content: "";

          position: absolute;

          top: -5px;

          right: 21px;

          width: 9px;
          height: 9px;

          background: #111d33;

          border-left: 1px solid rgba(255, 255, 255, 0.09);

          border-top: 1px solid rgba(255, 255, 255, 0.09);

          transform: rotate(45deg);
        }


        /* =====================================================
           DROPDOWN ITEM
        ===================================================== */

        .profile-dropdown-item {
          width: 100%;

          display: flex;

          align-items: center;

          gap: 9px;

          padding: 9px 10px;

          border: none;

          border-radius: 7px;

          background: transparent;

          color: #cbd4e5;

          font-family: inherit;

          font-size: 12px;

          font-weight: 500;

          text-align: left;

          cursor: pointer;

          transition: all 0.18s ease;
        }


        .profile-dropdown-item svg {
          color: #8b96ab;

          flex-shrink: 0;
        }


        .profile-dropdown-item:hover {
          background: rgba(99, 102, 241, 0.14);

          color: #ffffff;
        }


        .profile-dropdown-item:hover svg {
          color: #8c90ff;
        }


        /* =====================================================
           LOGOUT
        ===================================================== */

        .profile-dropdown-item.logout {
          color: #ef9a9a;
        }

        .profile-dropdown-item.logout svg {
          color: #df7777;
        }

        .profile-dropdown-item.logout:hover {
          background: rgba(239, 68, 68, 0.10);

          color: #ffaaaa;
        }

        .profile-dropdown-item.logout:hover svg {
          color: #ff8585;
        }


        /* =====================================================
           ANIMATION
        ===================================================== */

        @keyframes profileDropdown {

          from {
            opacity: 0;
            transform: translateY(-5px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 650px) {

          .profile-menu .profile-info {
            display: none;
          }

          .profile-menu .profile {
            gap: 4px;
          }

          .profile-dropdown {
            right: -5px;
          }

        }

      `}</style>
    </>
  );
}

export default Header;

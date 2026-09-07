import {
  Home,
  Users,
  CreditCard,
  MessageSquareWarning,
  UserRoundCheck,
  Building2,
  Megaphone,
  UsersRound,
  Car,
  ShieldCheck,
  CalendarDays,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { Link } from "react-router-dom";

import "./Features.css";

const features = [
  {
    icon: Home,
    title: "Smart Home Management",
    description:
      "Manage your home, apartment details and society services from one place.",
  },

  {
    icon: Users,
    title: "Resident Management",
    description:
      "Keep resident information organized and easily accessible.",
  },

  {
    icon: CreditCard,
    title: "Payments & Maintenance",
    description:
      "Track maintenance charges, payments and pending dues with ease.",
  },

  {
    icon: MessageSquareWarning,
    title: "Complaints & Requests",
    description:
      "Raise complaints and follow their progress until they are resolved.",
  },

  {
    icon: UserRoundCheck,
    title: "Visitor Management",
    description:
      "Keep track of visitors, deliveries and expected guests in your society.",
  },

  {
    icon: Building2,
    title: "Facility Booking",
    description:
      "Book community facilities such as the clubhouse, pool and halls.",
  },

  {
    icon: Megaphone,
    title: "Notices & Announcements",
    description:
      "Stay updated with important society announcements and notices.",
  },

  {
    icon: UsersRound,
    title: "Community",
    description:
      "Connect residents and encourage better communication within the society.",
  },

  {
    icon: Car,
    title: "Parking Management",
    description:
      "Manage parking spaces and keep track of allocated vehicles.",
  },

  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Improve society security with organized security and visitor information.",
  },

  {
    icon: CalendarDays,
    title: "Society Calendar",
    description:
      "View meetings, maintenance activities, celebrations and upcoming events.",
  },

  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description:
      "Understand society activity through useful reports and insights.",
  },
];

function Features() {
  return (
    <div className="features-page">

      {/* =========================
          HERO
      ========================== */}

      <section className="features-hero">

        <div className="hero-content">

          <div className="hero-badge">
            <span></span>
            SMART SOCIETY PLATFORM
          </div>

          <h1>
            Everything Your Society
            <br />
            <span>Needs, In One Place.</span>
          </h1>

          <p>
            A smarter way to manage residents, payments,
            facilities, visitors, security and everyday
            society activities.
          </p>

          <div className="hero-actions">

            <Link to="/" className="back-dashboard">
              Back to Dashboard
            </Link>

            <div className="hero-check">
              <CheckCircle2 size={16} />
              Simple. Smart. Connected.
            </div>

          </div>

        </div>


        {/* Decorative graphic */}

        <div className="hero-visual">

          <div className="visual-circle circle-one"></div>
          <div className="visual-circle circle-two"></div>

          <div className="visual-building">
            <Building2 size={90} />
          </div>

          <div className="floating-card residents-card">
            <Users size={18} />
            <div>
              <strong>248</strong>
              <span>Residents</span>
            </div>
          </div>

          <div className="floating-card security-card">
            <ShieldCheck size={18} />
            <div>
              <strong>Secure</strong>
              <span>Society</span>
            </div>
          </div>

          <div className="floating-card payment-card">
            <CreditCard size={18} />
            <div>
              <strong>₹4,350</strong>
              <span>Payments</span>
            </div>
          </div>

        </div>

      </section>


      {/* =========================
          FEATURES HEADER
      ========================== */}

      <section className="features-section">

        <div className="features-heading">

          <div>
            <span className="section-label">
              POWERFUL FEATURES
            </span>

            <h2>
              Built for smarter
              <br />
              <span>society living.</span>
            </h2>
          </div>

          <p>
            Everything you need to manage your apartment
            community efficiently, conveniently and securely.
          </p>

        </div>


        {/* =========================
            FEATURE CARDS
        ========================== */}

        <div className="features-grid">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <div
                className="feature-card"
                key={feature.title}
              >

                <div className="feature-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="feature-icon">
                  <Icon size={21} />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <div className="feature-arrow">
                  <ArrowRight size={15} />
                </div>

              </div>
            );

          })}

        </div>

      </section>


      {/* =========================
          BOTTOM CTA
      ========================== */}

      <section className="features-cta">

        <div>

          <span>SMART LIVING STARTS HERE</span>

          <h2>
            Manage your society.
            <br />
            Make life simpler.
          </h2>

        </div>

        <Link to="/" className="cta-button">
          Go to Dashboard
          <ArrowRight size={17} />
        </Link>

      </section>

    </div>
  );
}

export default Features;
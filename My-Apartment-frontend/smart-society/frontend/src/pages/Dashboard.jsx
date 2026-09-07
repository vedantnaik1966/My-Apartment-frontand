import StatCard from "../components/dashboard/StatCard";
import UsageCard from "../components/dashboard/UsageCard";
import QuickActions from "../components/dashboard/QuickActions";
import RecentActivity from "../components/dashboard/RecentActivity";
import apartmentImage from "../assets/apartment.png";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-top">
        <div className="dashboard-hero-column">
          <section
            className="welcome-section"
            style={{ "--apartment-image": `url(${apartmentImage})` }}
          >
            <div>
              <h1>Good Evening, Arjun! <span>👋</span></h1>
              <p>Welcome back to Green Valley Residency</p>
              <div className="welcome-info">
                <span>📅 23 May, 2026</span>
                <span>☁️ 28°C</span>
                <span className="active-system">● All Systems Active</span>
              </div>
            </div>
          </section>
          <QuickActions />
        </div>
        <div className="dashboard-insights">
          <section className="stats-grid">
            <StatCard type="health" title="Society Health Score" value="87" subtitle="Excellent • ↑ 6%" color="green" />
            <StatCard type="residents" title="Total Residents" value="248" subtitle="↑ 12 New this month" color="purple" />
            <StatCard type="maintenance" title="Maintenance Due" value="₹ 4,350" subtitle="Due from 18 Flats" color="orange" />
            <StatCard type="complaints" title="Open Complaints" value="12" subtitle="In Progress" color="pink" />
          </section>
          <section className="usage-grid">
            <UsageCard title="Energy Usage" percentage={62} description="Moderate Usage" type="energy" />
            <UsageCard title="Water Usage" percentage={45} description="Efficient Usage" type="water" />
          </section>
        </div>
      </div>
      <RecentActivity />
    </div>
  );
}

export default Dashboard;
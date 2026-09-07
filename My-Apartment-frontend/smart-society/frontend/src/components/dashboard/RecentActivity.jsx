import { Link } from "react-router-dom";

function RecentActivity() {
  return (
    <div className="bottom-grid">
      <div className="activity-card">
        <div className="card-header">
          <h3>Recent Notices</h3>
          <Link to="/notices">View All</Link>
        </div>

        <div className="activity-item">
          <div className="activity-symbol purple">📢</div>

          <div>
            <strong>Maintenance Work</strong>
            <p>Water pipeline maintenance on 25th May</p>
            <small>23 May, 2024 • 10:00 AM</small>
          </div>

          <span className="status new">New</span>
        </div>

        <div className="activity-item">
          <div className="activity-symbol green">📅</div>

          <div>
            <strong>Society Meeting</strong>
            <p>Monthly society meeting on 30th May</p>
            <small>22 May, 2024 • 06:00 PM</small>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-symbol orange">⚡</div>

          <div>
            <strong>Power Backup Test</strong>
            <p>Power backup test scheduled on 26th May</p>
            <small>21 May, 2024 • 11:00 AM</small>
          </div>
        </div>
      </div>

      <div className="activity-card">
        <div className="card-header">
          <h3>Upcoming Bookings</h3>
          <Link to="/calendar">View Calendar</Link>
        </div>

        <div className="booking-item">
          <div className="booking-image">🏢</div>

          <div>
            <strong>Club House</strong>
            <p>25 May, 2024 • 05:00 PM - 08:00 PM</p>
          </div>

          <span className="status confirmed">Confirmed</span>
        </div>

        <div className="booking-item">
          <div className="booking-image">🏊</div>

          <div>
            <strong>Swimming Pool</strong>
            <p>26 May, 2024 • 07:00 AM - 08:00 AM</p>
          </div>

          <span className="status confirmed">Confirmed</span>
        </div>

        <div className="booking-item">
          <div className="booking-image">🏛️</div>

          <div>
            <strong>Community Hall</strong>
            <p>28 May, 2024 • 06:00 PM - 10:00 PM</p>
          </div>

          <span className="status pending">Pending</span>
        </div>
      </div>

      <div className="activity-card">
        <div className="card-header">
          <h3>Visitors Today</h3>
          <Link to="/visitors">View All</Link>
        </div>

        <div className="visitor-item">
          <div className="visitor-avatar">RS</div>
          <div>
            <strong>Rahul Sharma</strong>
            <p>Flat B-304 • 10:30 AM</p>
          </div>
          <span className="status confirmed">Checked In</span>
        </div>

        <div className="visitor-item">
          <div className="visitor-avatar">PP</div>
          <div>
            <strong>Priya Patel</strong>
            <p>Flat C-502 • 11:15 AM</p>
          </div>
          <span className="status confirmed">Checked In</span>
        </div>

        <div className="visitor-item">
          <div className="visitor-avatar">AS</div>
          <div>
            <strong>Amit Singh</strong>
            <p>Flat A-1203 • 02:20 PM</p>
          </div>
          <span className="status expected">Expected</span>
        </div>

        <div className="visitor-item">
          <div className="visitor-avatar">AM</div>
          <div>
            <strong>Delivery - Amazon</strong>
            <p>Flat A-1203 • 03:00 PM</p>
          </div>
          <span className="status expected">Expected</span>
        </div>
      </div>
    </div>
  );
}

export default RecentActivity;

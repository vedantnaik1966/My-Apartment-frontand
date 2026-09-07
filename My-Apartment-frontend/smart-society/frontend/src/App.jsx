import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Features from "./pages/Features";

import Dashboard from "./pages/Dashboard";
import Residents from "./pages/Residents";
import Complaints from "./pages/Complaints";
import Payments from "./pages/Payments";
import Visitors from "./pages/Visitors";
import Facilities from "./pages/Facilities";
import Notices from "./pages/Notices";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import Parking from "./pages/Parking";
import Security from "./pages/Security";
import Activity from "./pages/Activity";
import Calendar from "./pages/Calendar";
import Reports from "./pages/Reports";
import Login from "./pages/Login";

function App() {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = JSON.parse(localStorage.getItem("smartSocietyUser"));
      return localStorage.getItem("smartSocietyToken") ? savedUser : null;
    } catch { return null; }
  });
  const login = (details) => { localStorage.setItem("smartSocietyUser", JSON.stringify(details)); setUser(details); };
  const updateUser = (details) => { localStorage.setItem("smartSocietyUser", JSON.stringify(details)); setUser(details); };
  const logout = () => { localStorage.removeItem("smartSocietyUser"); localStorage.removeItem("smartSocietyToken"); setUser(null); };
  if (!user) return <Login onLogin={login} />;
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <main className="main-content">
          <Header user={user} onLogout={logout} />

          <div className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/residents" element={<Residents />} />
              <Route path="/complaints" element={<Complaints />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/visitors" element={<Visitors />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/notices" element={<Notices />} />
              <Route path="/profile" element={<Profile user={user} onUserUpdate={updateUser} />} />
              <Route path="/community" element={<Community />} />
              <Route path="/parking" element={<Parking />} />
              <Route path="/security" element={<Security />} />
              <Route path="/features" element={<Features />} />

                          {/* Header Tabs */}
            <Route path="/activity" element={<Activity />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/reports" element={<Reports />} />
              
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

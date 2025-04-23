// src/pages/Dashboard.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import ProfileMenu from '../components/ProfileMenu';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-main">
        <div className="dashboard-header">
          <ProfileMenu user={user} />
        </div>
        <div className="dashboard-content">
          <h2>Welcome, {user?.full_name || 'User'}!</h2>
          <p>Choose an option from the sidebar to get started.</p>
        </div>
      </div>
    </div>
  );
};

//export default Dashboard;
// src/components/Sidebar.jsx
import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><a href="/courses">My Courses</a></li>
        <li><a href="/results">Results</a></li>
      </ul>
    </div>
  );
};

//export default Sidebar;
// src/components/ProfileMenu.jsx
import React, { useState } from 'react';
import '../styles/ProfileMenu.css';

const ProfileMenu = ({ user }) => {
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <div className="profile-container" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <img src={`http://localhost:5000/uploads/${user?.profilePic}`} alt="Profile" className="profile-image" />
      {open && (
        <div className="dropdown-menu">
          <a href="/profile">My Profile</a>
          <a href="/change-password">Change Password</a>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;

import React, { useState, useRef, useEffect } from "react";
import {
  FaUserMd,
  FaCalendarCheck,
  FaCapsules,
  FaChartPie,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogoutMessage, setShowLogoutMessage] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    setShowLogoutMessage(true);
    setTimeout(() => {
      setShowLogoutMessage(false);
      navigate("/"); // Redirect to login after showing the message
    }, 2000); // Show message for 2 seconds
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 space-y-4">
        <div className="text-2xl font-bold mb-8">
          <span className="text-blue-400">EMidas</span>Care
        </div>
        <nav className="space-y-4">
  <SidebarItem icon={<FaChartPie />} label="Dashboard" active />
  <SidebarItem
    icon={<FaUserMd />}
    label="Patients"
    subItems={["Patient List", "Add New Patient", "Patient History"]}
  />
  <SidebarItem
    icon={<FaCalendarCheck />}
    label="Appointments"
    subItems={["Today's Appointments", "Schedule Appointment", "Appointment History"]}
  />
  <SidebarItem
    icon={<FaCapsules />}
    label="Pharmacy"
    subItems={["Inventory", "Issue Medicine", "Pharmacy Reports"]}
  />
</nav>

      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-xl font-semibold">Dashboard Overview</div>
          <div className="relative" ref={menuRef}>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="w-8 h-8 rounded-full bg-gray-600" />
              <IoIosArrowDown />
            </div>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50">
                <div className="px-4 py-2 text-sm border-b">
                  <strong>Doctor123</strong>
                </div>
                <div className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                  Profile
                </div>
                <div
                  className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>

          {showLogoutMessage && (
            <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 animate-fade-in-up">
            Successfully logged out
          </div>
          
          )}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Total Patients"
            value="2,501"
            percent="+47%"
            color="blue"
          />
          <StatCard
            title="Appointments"
            value="1,102"
            percent="+24%"
            color="green"
          />
          <StatCard
            title="Revenue"
            value="$54,143"
            percent="+12%"
            color="purple"
          />
        </div>

        {/* Chart Placeholder */}
        <div className="mt-6 p-6 rounded bg-gray-800 h-64 flex justify-center items-center text-gray-400">
          [ Charts and Graphs Placeholder ]
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active, subItems = [] }) {
  const [open, setOpen] = useState(false);
  const hasSubItems = subItems.length > 0;

  return (
    <div>
      <div
        className={`flex items-center justify-between px-4 py-2 rounded cursor-pointer ${
          active ? "bg-blue-600" : "hover:bg-gray-700"
        }`}
        onClick={() => hasSubItems && setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          <span className="text-lg">{icon}</span>
          <span>{label}</span>
        </div>
        {hasSubItems && <IoIosArrowDown className={`transform transition-transform ${open ? "rotate-180" : ""}`} />}
      </div>

      {hasSubItems && open && (
        <ul className="ml-10 mt-1 space-y-1 text-sm text-gray-300">
  {subItems.map((sub, idx) => (
    <li key={idx}>
      <Link
        to={`/${label.toLowerCase()}/${sub.toLowerCase().replace(/\s+/g, "-")}`}
        className="block px-2 py-1 rounded hover:bg-gray-700 hover:text-white transition-colors"
      >
        {sub}
      </Link>
    </li>
  ))}
</ul>

      )}
    </div>
  );
}


function StatCard({ title, value, percent, color }) {
  const colorMap = {
    blue: "text-blue-400",
    green: "text-green-400",
    purple: "text-purple-400",
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="text-sm text-gray-400">{title}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
      <div className={`text-sm mt-2 ${colorMap[color]}`}>{percent}</div>
    </div>
  );
}

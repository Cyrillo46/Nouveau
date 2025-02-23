import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaChartBar,
  FaSignOutAlt,
  FaSun,
  FaMoon,
} from "react-icons/fa";

export const Dashboard = () => {
  // the role of the user
  const [userRole, setUserRole] = useState("staff");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [queue, setQueue] = useState([]);
  const [newPatient, setNewPatient] = useState("");

  useEffect(() => {
    const savedQueue = JSON.parse(localStorage.getItem("patientQueue"));
    if (savedQueue) {
      setQueue(savedQueue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("patientQueue", JSON.stringify(queue));
  }, [queue]);

  const addPatient = () => {
    if (newPatient.trim() === "") return;
    setQueue([...queue, { id: Date.now(), name: newPatient }]);
    setNewPatient("");
  };

  const removePatient = (id) => {
    setQueue(queue.filter((patient) => patient.id !== id));
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } flex h-screen transition-colors duration-300`}>
      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-4 right-4 bg-slate-800 text-white p-2 rounded-lg z-50 shadow-lg">
        {sidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar (Mobile & Desktop) */}
      <div
        className={`fixed md:relative top-0 left-0 h-full w-64 transition-transform duration-300 z-40 ${
          darkMode ? "bg-gray-700 text-white" : "bg-slate-800 text-white"
        } p-5 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}>
        <h2 className="text-2xl font-bold mb-6">Nouveau</h2>
        <h3 className="text-lg font-semibold mb-2">User Name</h3>

        {/* Navigation Menu with Icons */}
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard"
              className="flex items-center space-x-2 hover:bg-indigo-700 p-2 rounded"
              onClick={() => setSidebarOpen(false)}>
              <FaChartBar />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="flex items-center space-x-2 hover:bg-indigo-700 p-2 rounded"
              onClick={() => setSidebarOpen(false)}>
              <FaUser />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link
              to="/logout"
              className="flex items-center space-x-2 hover:bg-red-600 p-2 rounded"
              onClick={() => setSidebarOpen(false)}>
              <FaSignOutAlt />
              <span>Logout</span>
            </Link>
          </li>
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`mt-6 flex items-center space-x-2 p-2 ${
            darkMode
              ? "bg-gray-700 text-white hover:bg-gray-500"
              : "bg-slate-800 text-white hover:bg-slate-600"
          } rounded text-white w-full`}>
          {darkMode ? <FaSun /> : <FaMoon />}
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>

      {/* Overlay when mobile Sidebar is Open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>

        {/* Role Selection */}
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">
            Select Role:
          </label>
          <select
            className="p-2 border rounded-lg bg-white text-gray-900"
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}>
            <option value="staff">Staff</option>
            <option value="patient">Patient</option>
            <option value="transport">Transport</option>
          </select>
        </div>

        {/* Quick Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md text-gray-900">
            <h3 className="text-lg font-semibold">Total Appointments</h3>
            <p className="text-2xl font-bold text-indigo-600">24</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-gray-900">
            <h3 className="text-lg font-semibold">Pending Requests</h3>
            <p className="text-2xl font-bold text-red-500">5</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-gray-900">
            <h3 className="text-lg font-semibold">Notifications</h3>
            <p className="text-2xl font-bold text-green-500">12</p>
          </div>
        </div>

        {/* role status */}
        {userRole === "staff" && (
          <div className="bg-white p-4 rounded-lg shadow-md text-gray-900">
            <h2 className="text-xl font-semibold mb-2">Patient Queue</h2>
            <p>View and manage upcoming patients.</p>
          </div>
        )}

        {userRole === "patient" && (
          <div className="bg-white p-4 rounded-lg shadow-md text-gray-900">
            <h2 className="text-xl font-semibold mb-2">
              Your Treatment Status
            </h2>
            <p>Check your estimated wait time and notifications.</p>
          </div>
        )}

        {userRole === "transport" && (
          <div className="bg-white p-4 rounded-lg shadow-md text-gray-900">
            <h2 className="text-xl font-semibold mb-2">
              Transportation Schedule
            </h2>
            <p>View estimated pickup and drop-off times.</p>
          </div>
        )}

        {/* Recent Activity section */}
        <div className="mt-6 bg-white p-4 rounded-lg shadow-md text-gray-900">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-2">
            <li className="p-2 bg-gray-200 rounded-md">
              Appointment scheduled for 10:00 AM.
            </li>
            <li className="p-2 bg-gray-200 rounded-md">
              New patient added to the queue.
            </li>
            <li className="p-2 bg-gray-200 rounded-md">
              Transportation delay reported.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

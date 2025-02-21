import { useState } from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  // will change based on user role
  const [userRole, setUserRole] = useState("staff");
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-slate-800 text-white p-5 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">Nouveau</h2>
        <h3 className="text-lg font-semibold mb-2">User name</h3>
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard"
              className="block hover:bg-indigo-700 p-2 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="block hover:bg-indigo-700 p-2 rounded">
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/logout"
              className="block hover:bg-indigo-700 p-2 rounded">
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl text-slate-700 font-bold mb-4">
          Welcome to Your Dashboard
        </h1>

        {/* Dynamic content based on user role */}
        {userRole === "staff" && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Patient Queue</h2>
            <p>View and manage upcoming patients.</p>
          </div>
        )}

        {userRole === "patient" && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              Your Treatment Status
            </h2>
            <p>Check your estimated wait time and notifications.</p>
          </div>
        )}

        {userRole === "transport" && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              Transportation Schedule
            </h2>
            <p>View estimated pickup and drop-off times.</p>
          </div>
        )}
      </div>
    </div>
  );
};

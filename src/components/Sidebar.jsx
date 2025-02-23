export const Sidebar = () => {
  return (
    <>
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
    </>
  );
};

import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className=" min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p>Logged in!</p>
        <Link className="">Logout</Link>
      </div>
    </div>
  );
};

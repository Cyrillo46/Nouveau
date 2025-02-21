import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email submitted:", email);
    console.log("password submitted:", password);

    navigate("/dashboard");
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <Navbar />
      <h1 className="text-8xl mb-6 text-slate-900">Welcome!</h1>
      <div className="w-96 p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-light mb-4 text-slate-500 text-center">
          Login
        </h2>
        {/* connect to  backend api  */}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label className="block text-slate-600 font-medium mb-1">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-600 font-medium mb-1">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-24 bg-indigo-600 text-white p-2 cursor-pointer rounded-md hover:bg-indigo-800 transition duration-300">
              Login
            </button>
          </div>
          <Link
            to="/forgot-password"
            className="mt-4 text-blue-600 hover:underline hover:text-indigo-800 transition duration-300 text-center">
            Forgot your password? Reset it here.
          </Link>
        </form>
      </div>

      <Link
        to="/signup"
        className="mt-4 text-blue-600 hover:underline hover:text-indigo-800 transition duration-300">
        Need an account? Click here!
      </Link>
    </div>
  );
};

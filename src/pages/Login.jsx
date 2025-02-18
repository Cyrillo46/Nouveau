import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
      <h1 className="text-8xl mb-6 text-gray-800">Welcome!</h1>
      <div className="w-96 p-6 bg-white rounded-2xl shadow-md">
        {/* connect to  backend api  */}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 cursor-pointer rounded-md hover:bg-blue-600 transition duration-300">
            Login
          </button>
        </form>
      </div>

      <Link to="/signup" className="mt-4 text-blue-600 hover:underline">
        Need an account? Click here!
      </Link>
    </div>
  );
};

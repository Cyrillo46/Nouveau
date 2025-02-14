import { useState } from "react";
import { GiGriffinSymbol } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email submitted");
    console.log("password submitted");

    navigate("/dashboard");
  };
  return (
    <div className=" bg-blue-100 h-screen flex flex-col items-center">
      <h1 className="text-8xl mb-6 mt-2 text-blue-600">Welcome!</h1>
      <div className="h-3/5 w-2/5 rounded-2xl bg-blue-500 backdrop-opacity-75">
        <div className="flex justify-center items-center mt-14">
          <GiGriffinSymbol size={450} color="#7F1D1D" />
        </div>
      </div>
      {/* connect to  backend api */}
      <form handleSubmit={handleSubmit} className="flex flex-col">
        <label className="bg-blue-500 text-blue-50 p-1 text-center mt-2.5 rounded-md">
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="mb-4 border rounded-md"
        />

        <label className="bg-blue-500 text-blue-50 p-1 text-center mt-2.5 mb-4 rounded-md">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          className="border"
        />
      </form>
      <button
        type="submit"
        className="bg-blue-500 text-blue-50 p-1 text-center mt-2.5 mb-4 rounded-md cursor-pointer">
        Login
      </button>
      <Link to="/signup" className="">
        Need an account? Click here!
      </Link>
    </div>
  );
};

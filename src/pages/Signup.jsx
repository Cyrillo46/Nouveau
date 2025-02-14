import { GiGriffinSymbol } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    navigate("/");
  };

  return (
    <div className="bg-purple-100 h-screen flex flex-col items-center">
      <h1 className="text-8xl mb-6 mt-2 text-purple-600">Sign Up!</h1>
      <div className="h-3/5 w-2/5 rounded-2xl bg-purple-500 backdrop-opacity-75">
        <div className="flex justify-center items-center mt-14">
          <GiGriffinSymbol size={450} color="#7F1D1D" />
        </div>
      </div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="bg-purple-500 text-purple-50 p-1 mt-2 text-center rounded-md">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-2 rounded-md border-1"
          required
        />
        <label className="bg-purple-500 text-purple-50 p-1 text-center rounded-md">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 rounded-md border-1"
          required
        />
        <button
          type="submit"
          className="bg-purple-600 text-purple-50 p-2 rounded-md mt-4">
          Sign Up
        </button>
      </form>
      <Link to="/login" className="mt-4 text-purple-600">
        Already have an account? Log in here!
      </Link>
    </div>
  );
};

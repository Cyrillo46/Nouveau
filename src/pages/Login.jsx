import { GiGriffinSymbol } from "react-icons/gi";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <div className=" bg-blue-100 h-screen flex flex-col items-center">
      <h1 className="text-8xl mb-6 mt-2 text-blue-600">Welcome!</h1>
      <div className="h-3/5 w-2/5 rounded-2xl bg-blue-500 backdrop-opacity-75">
        <div className="flex justify-center items-center mt-14">
          <GiGriffinSymbol size={450} color="#7F1D1D" />
        </div>
      </div>
      <form className="flex flex-col">
        <input type="text" />
        <label className="bg-blue-500 text-blue-50 p-1 text-center rounded-md">
          Email
        </label>
        <input type="text" className="" />
        <label className="bg-blue-500 text-blue-50 p-1 text-center rounded-md">
          Password
        </label>
      </form>
      <Link to="/signup" className="">
        Need an account? Click here!
      </Link>
    </div>
  );
};

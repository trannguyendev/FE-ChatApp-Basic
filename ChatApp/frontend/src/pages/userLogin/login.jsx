import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { apiLogin } from "../../api/auth/login";
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    apiLogin(email, password);
  };
  return (
    <div className="h-lvh flex-1 flex-col justify-center px-6 py-12 lg:px-8 border-solid border-2 border-sky-500 rounded-md box-border w-100 self-center max-w-[100%] bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <FontAwesomeIcon className="mx-auto h-10 w-auto" icon={faDragon} />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-l font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-md py-1.5 px-2 text-gray-900 shadow-sm placeholder:text-gray-400"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-l font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-md py-1.5 px-2 text-gray-900 shadow-sm placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className=" flex justify-between ">
            <Link
              to="/forgotPass"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </Link>
            <Link
              to="/register"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Register
            </Link>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-l font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;

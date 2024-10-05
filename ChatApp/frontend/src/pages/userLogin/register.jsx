import { faDragon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { api } from "../../api/api";
import { apiRegister } from "../../api/auth/register";
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [gender, setGender] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password == rePassword) {
      apiRegister(username, email, password, gender, navigate);
    }
  };
  return (
    <div className="h-lvh flex-1 flex-col justify-center px-6 py-12 lg:px-8 border-solid border-2 border-sky-500 rounded-md box-border w-100 self-center max-w-[100%] bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <FontAwesomeIcon
          className="mx-auto h-10 w-auto flex items-center justify-center"
          icon={faDragon}
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
          Sign up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-l font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
                className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6"
              />
            </div>
          </div>
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
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                required
                className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-l font-medium leading-6 text-gray-900"
              >
                Re-enter your password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="re-password"
                name="text"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                type="password"
                autoComplete="current-password"
                placeholder="Re-enter your password"
                required
                className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-l sm:leading-6"
              />
            </div>
          </div>
          <label
            htmlFor="question"
            className="block text-l font-medium leading-6 text-gray-900"
          >
            Please choose your gender
          </label>
          <div className="flex justify-between">
            <div className="font-semibold h-10 px-16 content-center border-2 rounded-lg text-white bg-indigo-600 border-indigo-500/100 hover:text-indigo-600 hover:bg-white">
              <input
                type="radio"
                value="boy"
                onChange={(e) => setGender(e.target.value)}
                name="question"
                id="boy"
                required
              ></input>
              <label htmlFor="male">Male</label>
            </div>

            <div className="font-semibold h-10 px-16 content-center border-2 rounded-lg text-white bg-indigo-600 border-indigo-500/100 hover:text-indigo-600 hover:bg-white">
              <input
                type="radio"
                name="question"
                id="girl"
                value="girl"
                onChange={(e) => setGender(e.target.value)}
                required
              ></input>
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <Link
            to="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            <div className=" flex justify-between ">
              Already have account? Login
            </div>
          </Link>
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

export default Register;

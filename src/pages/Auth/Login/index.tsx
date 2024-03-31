import Button from "@components/Shared/Button";
import Input from "@components/Shared/Input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen -my-6 flex items-center">
      <div className="w-full space-y-6">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-semibold text-gray-700">Login</h1>
          <p className="text-sm text-gray-500">
            Enter your email and password to login
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <Input type="text" id="email" placeholder="example@gmail.com" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <Input type="password" id="password" />
          </div>
        </div>
        <Button>Sign In</Button>
        <div className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link className="underline font-semibold" to="/register">
            Sign Up
          </Link>{" "}
          here.
        </div>
      </div>
    </div>
  );
};

export default Login;

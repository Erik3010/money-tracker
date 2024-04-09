import Button from "@components/Shared/Button";
import Input from "@components/Shared/Input";
import useForm from "@hooks/useForm";
import supabase from "@lib/supabaseClient";
import { AuthForm } from "@money-tracker-types/index";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = async ({ email, password }: AuthForm) => {
    if (!email || !password) return;

    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(response);
  };

  const {
    formData,
    isLoading,
    handleFormChange,
    handleSubmit: handleSignIn,
  } = useForm(
    { email: "superadmin@gmail.com", password: "superadmin" },
    handleSubmit
  );

  return (
    <div className="w-full h-screen -my-6 flex items-center">
      <form className="w-full space-y-6" onSubmit={handleSignIn}>
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
            <Input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleFormChange}
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <Input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleFormChange}
            />
          </div>
        </div>
        <Button loading={isLoading} disabled={isLoading}>
          Sign In
        </Button>
        <div className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link className="underline font-semibold" to="/register">
            Sign Up
          </Link>{" "}
          here.
        </div>
      </form>
    </div>
  );
};

export default Login;

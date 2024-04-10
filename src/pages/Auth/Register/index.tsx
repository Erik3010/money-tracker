import { Link } from "react-router-dom";
import Button from "@components/Shared/Button";
import Input from "@components/Shared/Input";

import supabase from "../../../libs/supabaseClient";
import useForm from "@hooks/useForm";
import { AuthForm } from "@money-tracker-types/index";

const Register = () => {
  const handleSubmit = async ({ email, password }: AuthForm) => {
    if (!email || !password) return;

    const response = await supabase.auth.signUp({ email, password });
    console.log(response);
  };

  const {
    formData,
    isLoading,
    handleFormChange,
    handleSubmit: handleSignUp,
  } = useForm(
    { email: "superadmin@gmail.com", password: "superadmin" },
    handleSubmit
  );

  return (
    <div className="w-full h-screen -my-6 flex items-center">
      <form className="w-full space-y-6" onSubmit={handleSignUp}>
        <div className="space-y-1.5">
          <h1 className="text-2xl font-semibold text-gray-700">Register</h1>
          <p className="text-sm text-gray-500">
            Enter your email and password to create an account
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="email">
              Email
            </label>
            <Input
              type="email"
              name="email"
              id="email"
              onChange={handleFormChange}
              value={formData.email}
              placeholder="example@gmail.com"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="password">
              Password
            </label>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={handleFormChange}
              value={formData.password}
            />
          </div>
        </div>
        <Button loading={isLoading} disabled={isLoading} type="submit">
          Sign Up
        </Button>
        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link className="underline font-semibold" to="/login">
            Sign In
          </Link>{" "}
          here.
        </div>
      </form>
    </div>
  );
};

export default Register;

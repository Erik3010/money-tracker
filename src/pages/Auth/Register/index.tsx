import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@components/Shared/Button";
import Input from "@components/Shared/Input";

import supabase from "@lib/supabaseClient";

interface AuthForm {
  email: string;
  password: string;
}

const Register = () => {
  // const [form, setForm] = useState<AuthForm>({ email: "", password: "" });
  const [form, setForm] = useState<AuthForm>({
    email: "superadmin@gmail.com",
    password: "superadmin",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();

    const { email, password } = form;
    if (!email || !password) return;

    try {
      setIsLoading(true);
      const response = await supabase.auth.signUp({ email, password });
      console.log(response);
    } finally {
      setIsLoading(false);
    }
  };

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
              value={form.email}
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
              value={form.password}
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

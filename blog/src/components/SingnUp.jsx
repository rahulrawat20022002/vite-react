import React from "react";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { login } from "../store/authSlice";
import { Input } from "./Input";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function SingnUp() {
  const { register, handleSubmit } = useForm();

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const create = async (data) => {
    setError("");
    const singupData = await authService.createAccount(data);
    if (singupData) {
      const getuserData = await authService.getCurrentUser();
      if (getuserData) {
        dispatch(login(getuserData));
        navigate("/");
      }
    }
    try {
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(create)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Name"
              type="text"
              placeholder="Enter your Name"
              {...register("name", {
                required: true,
              })}
            />

            <Input
              label="Email"
              type="email"
              placeholder="Enter your email address"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/.test(value) ||
                    "Incorrect Email Address",
                },
              })}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your passsword"
              {...register("password", {
                required: true,
              })}
            />

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SingnUp;

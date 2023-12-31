import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Logo } from "./index";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../store/authSlice";
function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const login = async (data) => {
    console.log(data);
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();

        if (userData) {
          dispatch(login(userData));
          console.log(userData);
          navigate("/");
        }
        //   const getData = useSelector((state) => state.auth.userData);
        //   console.log(getData);
      }
    } catch (error) {
      console.log("Apprwirte::error occurred", error);
      setError(error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
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
              Sing In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;

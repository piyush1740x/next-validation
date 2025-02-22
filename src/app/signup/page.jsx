"use client";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/navigation";
const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/signup", user, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }); 
      if (res.data.success) {
        toast.success(res.data.message);
        router.push("/home");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
      console.log(error.message);
    }
    setUser({
      name: "",
      password: "",
      email: "",
    });
  };

  return (
    <div className="flex p-10 items-center justify-center min-h-screen min-w-full bg-gradient-to-r from-blue-800 to-purple-900">
      <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-lg rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Create an Account
        </h1>
        <form onSubmit={onSubmitHandler} className="space-y-5">
          <div>
            <label className="block text-white font-medium mb-1">
              Full Name
            </label>
            <input
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              value={user.name}
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-1">Email</label>
            <input
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              value={user.email}
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-1">
              Password
            </label>
            <input
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>

          <p className="text-center text-gray-300">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-300 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

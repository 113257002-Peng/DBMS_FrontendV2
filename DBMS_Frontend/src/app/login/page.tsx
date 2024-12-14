"use client";

import React from "react";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Create an account
        </h1>
        <p className="text-sm text-center mb-6">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500">
            Log in
          </a>
        </p>

        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              What should we call you?
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your profile name"
              fullWidth
              className="border-gray-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              What’s your email?
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              fullWidth
              className="border-gray-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Create a password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                fullWidth
                className="border-gray-300"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {passwordVisible ? "Hide" : "Show"}
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
          </div>

          <Button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600"
            type="submit"
          >
            Create an account
          </Button>
        </form>

        <div className="mt-6">
          <p className="text-center text-sm text-gray-500 mb-4">
            OR Continue with
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full flex items-center hover:bg-blue-700">
              Facebook
            </button>
            <button className="bg-red-600 text-white py-2 px-4 rounded-full flex items-center hover:bg-red-700">
              Google
            </button>
            <button className="bg-black text-white py-2 px-4 rounded-full flex items-center hover:bg-gray-800">
              Apple
            </button>
          </div>
        </div>

        <p className="text-sm text-center text-gray-500 mt-6">
          By creating an account, you agree to the{" "}
          <a href="/terms" className="text-blue-500">
            Terms of use
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-blue-500">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}

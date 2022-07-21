import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import sidepic from "../../public/5199419.jpg";
import { loginUser } from "../service/api/user.api.service";

const Auth: NextPage = () => {
  const [fields, setFields] = useState({
    username: "",
    password: "",
  });

  const [errors, setError] = useState();

  const loginHandler = async (e: any) => {
    e.preventDefault();
    try {
      await loginUser(fields);
      Router.replace("/src/home");
    } catch (error: any) {
      setError(error.response.data.message);
    }
  };

  const fieldHandler = (e: any) => {
    const name = e.target.getAttribute("name");
    setFields({
      ...fields,
      [name]: e.target.value,
    });
  };

  return (
    <main>
      <div className="min-h-full items-center flex justify-center px-4  sm:px-6 lg:px-8 absolute top-0 left-0 right-0 bottom-0 m-auto">
        <div className="max-w-lg rounded-l-md overflow-hidden shadow-2xl w-full bg-white">
          <h2 className="mt-10 text-center text-3xl font-extrabold text-gray-900 ">
            Sign in to your account
          </h2>
          <form onSubmit={loginHandler.bind(this)}>
            <input type="hidden" />
            <div className="-space-y-px p-5 flex flex-col gap-2">
              <div>
                <label className="not-sr-only mb-3 text-gray-600">
                  Email Address
                </label>
                <input
                  onChange={fieldHandler.bind(this)}
                  type="text"
                  name="username"
                  placeholder="Email Address"
                  className="appearance-none rounded-2xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
              <div>
                <label className="not-sr-only mb-3 text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  onChange={fieldHandler.bind(this)}
                  name="password"
                  placeholder="Password"
                  className="appearance-none rounded-2xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label>{errors}</label>
            </div>
            <div className="flex items-center justify-between sm:px-7 lg:px7  mx-w-full mx-h-full pb-8">
              <div className="flex items-center ">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="w-4 h-4 text-indigo-600 border-0 rounded-md focus:ring-0"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900 font-semibold"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm ">
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-500 font-semibold"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className="mb-6 mr-10 ml-10">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Sign in
              </button>
            </div>

            <div className="flex items-center justify-center pb-20">
              <div>
                <h1 className="font-medium ">
                  Dont have account?&nbsp;
                  <Link href="/auth/register">
                    <a className="font-medium text-indigo-600 hover:text-indigo-500">
                      Sign Up
                    </a>
                  </Link>
                </h1>
              </div>
            </div>
          </form>
        </div>
        <div className="max-w-lg rounded-r-md shadow-2xl overflow-hidden w-full ">
          <div>
            <Image
              src={sidepic}
              alt="Side Pic"
              layout="responsive"
              width="444.5px"
              height="403px"
              priority={true}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Auth;

import { NextPage } from "next";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import { signUpUser } from "../service/api/user.api.service";

const Register: NextPage = () => {
  const [fields, setFields] = useState({
    namaDepan: "",
    namaBelakang: "",
    username: "",
    password: "",
    jenisKelamin: "",
    tanggalLahir: "",
    email: "",
  });

  const fieldHandler = (e: any) => {
    const name = e.target.getAttribute("name");
    setFields({
      ...fields,
      [name]: e.target.value,
    });
  };

  const confirmPassword = (e: any) => {
    let confirmPassword = "";
    const password = fields.password;
    console.log(password);
    if (confirmPassword === password) {
      console.log("cocok");
    } else {
      console.log("ok");
    }
  };

  const registerHandler = async (e: any) => {
    e.preventDefault();
    try {
      await signUpUser(fields);
      Router.push("/");
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <main>
      <div className="min-h-full min-w-full items-center flex justify-center px-4  sm:px-6 lg:px-8 absolute top-0 left-0 right-0 bottom-0 m-auto">
        <div className="max-w-5xl w-full rounded-l-md overflow-hidden shadow-2xl  bg-white ">
          <h2 className="mt-10 text-center text-3xl font-extrabold text-gray-900 ">
            Create your account
          </h2>
          <form onSubmit={registerHandler.bind(this)}>
            <input type="hidden" />
            <div className="flex flex-row">
              <div className="-space-y-px p-5 flex flex-col gap-2 w-1/2">
                <div>
                  <label className="not-sr-only mb-3 text-gray-600">
                    Firstname
                  </label>
                  <input
                    onChange={fieldHandler.bind(this)}
                    type="text"
                    name="namaDepan"
                    placeholder="FirstName"
                    className="appearance-none rounded-2xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="not-sr-only mb-3 text-gray-600">
                    Lastname
                  </label>
                  <input
                    onChange={fieldHandler.bind(this)}
                    type="text"
                    name="namaBelakang"
                    placeholder="Lastname"
                    className="appearance-none rounded-2xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="not-sr-only mb-3 text-gray-600">
                    Jenis Kelamin
                  </label>
                  <select
                    onChange={fieldHandler.bind(this)}
                    name="jenisKelamin"
                    placeholder="Jenis Kelamin"
                    className="appearance-none rounded-2xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  >
                    <option value="L">Laki-laki</option>
                    <option value="P">Perempuan</option>
                  </select>
                </div>
                <div>
                  <label className="not-sr-only mb-3 text-gray-600">
                    Tanggal Lahir
                  </label>
                  <input
                    onChange={fieldHandler.bind(this)}
                    type="date"
                    name="tanggalLahir"
                    placeholder="tanggalLahir"
                    className="appearance-none rounded-2xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>
              <div className="-space-y-px p-5 flex flex-col gap-2 w-1/2">
                <div>
                  <label className="not-sr-only mb-3 text-gray-600">
                    Username
                  </label>
                  <input
                    onChange={fieldHandler.bind(this)}
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="appearance-none rounded-2xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <label className="not-sr-only mb-3 text-gray-600">
                    Email Address
                  </label>
                  <input
                    onChange={fieldHandler.bind(this)}
                    type="text"
                    name="email"
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
                <div>
                  <label className="not-sr-only mb-3 text-gray-600">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    onChange={confirmPassword.bind(this)}
                    name="confirmPassword"
                    placeholder="Password"
                    className="appearance-none rounded-2xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>
            </div>
            <div className="mb-6 mr-10 ml-10 mt-6 flex">
              <button
                type="submit"
                className="m-auto w-1/2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Sign Up
              </button>
            </div>

            <div className="flex items-center justify-center pb-12">
              <div>
                <h1 className="font-medium ">
                  Already Have an Account?&nbsp;
                  <Link href="/">
                    <a className="font-medium text-indigo-500 hover:text-indigo-700">
                      Sign In
                    </a>
                  </Link>
                </h1>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;

import Image from "next/image";
import React from "react";
import sideImg from "../public/Autumn-amico 1.png";
import leaf from "../public/logo.png";
import user from "../public/user.png";
import lock from "../public/lock.png";
import mail from "../public/mail-02.png";
import fb from "../public/fb.png";
import google from "../public/google.png";
import apple from "../public/apple.png";

const CreateAccount = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 h-screen">
      <div className="bg-[#E9F8E5] hidden md:flex justify-center items-center h-full">
        <Image src={sideImg} />
      </div>
      <div className="text-center p-10 md:p-20">
        <div className="flex justify-center mt-20">
          <Image src={leaf} width={120} height={120} alt="logo" />
        </div>
        <div className="md:hidden flex justify-center ">
          <Image src={sideImg} width={300} height={100} alt="side image" />
        </div>
        <h1 className=" md:mt-5 text-2xl font-bold font-poppins">
          Create Account
        </h1>
        <div className=" mt-10">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-start ms-1"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <div className="flex items-center border rounded-full md:rounded-xl  py-2 px-3">
              <Image src={user} width={30} height={30} alt="user image" />
              <input
                type="text"
                id="fullName"
                placeholder="Enter Full Name"
                className="bg-white focus:outline-none border-none w-full ps-3"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-start ms-1"
              htmlFor="email"
            >
              Email
            </label>
            <div className="flex items-center border rounded-full md:rounded-xl py-2 px-3">
              <Image src={mail} width={30} height={30} alt="mail image" />
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="bg-white focus:outline-none border-none w-full ps-3"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 ms-1 text-start"
              htmlFor="password"
            >
              Password
            </label>
            <div className="flex items-center border rounded-full md:rounded-xl py-2 px-3">
              <Image src={lock} width={30} height={30} alt="lock image" />
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password"
                className="bg-white focus:outline-none border-none w-full ps-3"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#73895D] text-white mt-10 py-2 rounded-full focus:outline-none focus:shadow-outline"
          >
            Sign-Up
          </button>

          <div className="flex items-center justify-center my-4">
            <hr className="w-10 border-gray-300" />
            <span className="px-4 text-gray-500">OR</span>
            <hr className="w-10 border-gray-300" />
          </div>

          <div className="flex justify-center space-x-4">
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 bg-white border rounded-full hover:bg-gray-100 focus:outline-none"
            >
              <Image src={google} width={30} height={30} alt="google image" />
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 bg-white border rounded-full hover:bg-gray-100 focus:outline-none"
            >
              <Image src={fb} width={30} height={30} alt="fb image" />
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 bg-white border rounded-full hover:bg-gray-100 focus:outline-none"
            >
              <Image src={apple} width={30} height={30} alt="apple image" />
            </button>
          </div>

          <div className="text-center mt-5">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="#" className="text-green-600 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;

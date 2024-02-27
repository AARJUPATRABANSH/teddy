"use client";
import React from "react";

const Page = () => {
  return (
    <form className="max-w-sm mx-auto ">
      <h1 className="3xl p-4 m-3">PLEASE SIGN IN</h1>
      <div className="mb-5">
        <label
          htmlFor="email/number"
          className="block mb-2 text-sm font-medium text-gray-950 dark:text-white"
        >
          Your email/phone number:
        </label>
        <input
          type="email/number"
          id="email/number"
          placeholder="Please enter your Email or Phone number"
          className="bg-gray-50 border border-gray-300 text-gray-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-950 dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          placeholder="please set your password"
          className="bg-gray-50 border border-gray-300 text-gray-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-950 dark:text-white"
        >
          Retype your password
        </label>
        <input
          type="password"
          id="password"
          placeholder="please enter your password again"
          className="bg-gray-50 border border-gray-300 text-gray-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="code"
          className="block mb-2 text-sm font-medium text-gray-950 dark:text-white"
        >
          Varification Code
        </label>
        <input
          type="number"
          id="code"
          placeholder="please enter your code"
          className="bg-gray-50 border border-gray-300 text-gray-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="birthday"
              type="date"
              className="  border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="birthday"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          ></label>
        </div>
        <div className="rounded-md p-4 m-2">
          <select>
            <option selected>Gender</option>
            <option value="M"> Male </option>
            <option value="Fe"> Female </option>
            <option value="o"> Others </option>
          </select>
        </div>
      </div>

      <a href="/privacy" className="text-blue-700 m-4">
        I accept terms and condition
      </a>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Page;

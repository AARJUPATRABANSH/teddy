"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800  bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow-md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center">. All Rights Reserved.</span>

        <div>
          <h2 className="text-[#F85606] font-bold">Customer Care </h2>
          <ul>
            {" "}
            <li className="flex flex-wrap  flex-col mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 ">
              <a
                href="about-us"
                className="hover:underline  hover:text-blue-800"
              >
                Help Center
              </a>
              <a
                href="privacy"
                className="hover:underline  hover:text-blue-800"
              >
                How to buy
              </a>
              <a
                href="about-us"
                className="hover:underline  hover:text-blue-800"
              >
                Returns and Refund
              </a>
              <a
                href="about-us"
                className="hover:underline  hover:text-blue-800"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[#F85606] font-bold">CONTACT INFO</h2>
          <ul>
            <li className="  mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 ">
              <div className="flex flex-wrap items-center">
                <img
                  src="https://t4.ftcdn.net/jpg/02/38/80/63/360_F_238806358_xFU7flGjQZhZFCETOhWG78lAVcRgEpO2.jpg"
                  className="h-8"
                ></img>
                <p>9821587141</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <img
                  src="https://w7.pngwing.com/pngs/549/715/png-transparent-web-development-logo-website-web-design-symmetry-internet.png"
                  alt="web"
                  className="h-4"
                ></img>
                <p>www.gifty.com</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#F85606] font-bold ">GIFTY</h2>
          <ul>
            <li className="flex flex-wrap  flex-col mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 ">
              <a
                href="about-us"
                className="hover:underline  hover:text-blue-800"
              >
                About Gifty
              </a>
              <a
                href="privacy"
                className="hover:underline  hover:text-blue-800"
              >
                Goals
              </a>
              <a
                href="about-us"
                className="hover:underline  hover:text-blue-800"
              >
                Privacy Policy
              </a>
              <a
                href="about-us"
                className="hover:underline  hover:text-blue-800"
              >
                Programs
              </a>
              <a
                href="about-us"
                className="hover:underline  hover:text-blue-800"
              >
                Winnners
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[#F85606] font-bold">Follow us on</h2>
          <ul className="flex flex-wrap flex-row justify-center space-x-4">
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <img
                  src="https://th.bing.com/th/id/R.ebe12dc32db7d3a0089ce0f1c5b0caea?rik=gatB2Ut7aWOLtg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-EzeswpQ0o7M%2fURusTcu183I%2fAAAAAAAAACQ%2fU6b9mbyvO-4%2fs1600%2ffacebook%2blogo%2b7.jpg&ehk=d8y3tYTW51sJk69QOxaCsmrcJdamfbydV0WUyIMk7EM%3d&risl=&pid=ImgRaw&r=0"
                  alt="fb-img"
                  className="h-7"
                ></img>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/?hl=en" target="_blank">
                <img
                  src="https://th.bing.com/th/id/R.5e04fd779e7607a47d0bad14976caa90?rik=MYieavaZpaXrMw&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f02%2fNew-Instagram-logo.jpg&ehk=kTNHOU7RNhSBC8VTl4FPXOmyjXgyJlrNtPiZ9qk03fA%3d&risl=&pid=ImgRaw&r=0"
                  alt="insta"
                  className="h-7"
                ></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

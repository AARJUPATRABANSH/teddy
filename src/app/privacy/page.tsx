"use client";

import { useRouter } from "next/navigation";
import React from "react";
const Page = () => {
  return (
    <div>
      <h1 className="text-2xl text-justify p-6 ">
        When you use our services, you are trusting us with your information. We
        understand this is a big responsibility and work hard to protect your
        information and put you in control.
      </h1>
      <p className="p-4 text-xl m-2 ">
        We build a range of services that help millions of people daily to
        explore and interact with the world in new ways. Our services include:
        Google apps, sites, and devices, like Search, YouTube, and Google Home
        Platforms like the Chrome browser and Android operating system Products
        that are integrated into third-party apps and sites, like ads,
        analytics, and embedded Google Maps You can use our services in a
        variety of ways to manage your privacy. For example, you can sign up for
        a Google Account if you want to create and manage content like emails
        and photos, or see more relevant search results. And you can use many
        Google services when youre signed out or without creating an account at
        all, like searching on Google or watching YouTube videos. You can also
        choose to browse the web in a private mode, like Chrome Incognito mode.
        And across our services, you can adjust your privacy settings to control
        what we collect and how your information is used. To help explain things
        as clearly as possible, weve added examples, explanatory videos, and
        definitions for key terms. And if you have any questions about this
        Privacy Policy, you can contact us
      </p>
    </div>
  );
};

export default Page;

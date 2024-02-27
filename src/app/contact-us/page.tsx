"use client";

import { useRouter } from "next/navigation";
import React from "react";
export default function ContactUs() {
  {     
    const router = useRouter();
    return (
      <div>
        <div className=" text-center  bg-slate-200 w-full ">
          <h1 className="text-2xl space-y-6">
            Hello! My name is Aarju Patrabansh
          </h1>
          <p className="text-xl p-4">Here are all contact information </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quo
            distinctio, porro unde aliquid hic impedit iusto quos autem,
            dolores, quia ea illum exercitationem doloremque! Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Deserunt atque odio officiis
            natus. Nam similique sit itaque, magnam ratione odio dignissimos
            sequi repellendus, architecto minus dicta sint repudiandae.
            Consequuntur magni voluptatum harum ipsam.
          </p>
        </div>
        {/* <div className="flex justify-center gap-6">
          <button
            type="button"
            onClick={() => router.push("/about-us")}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
          >
            About Us
          </button> */}
      </div>
    );
  }
}

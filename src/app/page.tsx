"use client";
import { giftsArr } from "@/utils/data";
import { url } from "inspector";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <div className="flex flex-wrap  p-4 m-5 ">
        {giftsArr.map((data) => {
          return (
            <div
              key={data.Name}
              onClick={() => router.push(`/gift/${data.id}`)}
              className="hover:shadow-md  rounded-md w-[250px] p-2 m-5  space-y-2 justify-items-center"
            >
              <img
                src={data.image}
                alt="image"
                className="w-full h-[150px] object-cover "
              />
              <h1 className="text-xl font-semibold"> {data.Name}</h1>
              <p className="text-sm">Discount : {data.Discount}</p>

              <p className="text-sm">Price: {data.Price}</p>
              <p className="text-red-700">Rating:{data.Rating}</p>
            </div>
          );
        })}
      </div>

      {/* <div>
        <div className="flex justify-buttom ">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => router.push("/contact-us")}
          >
            Contact Us
          </button>
        </div> */}
    </div>
  );
}

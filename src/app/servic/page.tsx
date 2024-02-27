"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function ContactUs() {
  const router = useRouter();

  return (
    <div>
      <div>
        <h1 className="text-2xl text-bold p-7 text-center">
          Services provided
        </h1>
        <p className=" p-6  text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          atque odio officiis natus. Nam similique sit itaque, magnam ratione
          odio dignissimos sequi repellendus, architecto minus dicta sint
          repudiandae. Consequuntur magni voluptatum harum ipsam.
        </p>
      </div>
    </div>
  );
}

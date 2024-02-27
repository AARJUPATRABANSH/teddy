"use client";
import { url } from "inspector";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
export default function Home() {
  const router = useRouter();

  const giftsArr = [
    {
      Name: "Frame",
      // Color: "blue",
      Price: 333,
      Rating: 5,
      Discount: 10,
      image:
        "https://cdn.dribbble.com/userupload/8843085/file/original-3f3bff0641a98e30aabf4b948f5a99ec.jpg?resize=1024x1126",
    },
    {
      Name: "Teddy",
      // Color: "blue",
      Price: 5000,
      Rating: 4,
      Discount: 50,
      image:
        "https://cdn.dribbble.com/users/2123888/screenshots/15967330/media/1753bb295e8116583e2f56cb0b2fd415.jpg?resize=1200x900&vertical=center",

      discount: 5,
    },
    {
      Name: "Chocolate",
      // Color: "blue",
      Price: 333,
      Rating: 4,
      Discount: 10,
      image:
        "https://cdn.dribbble.com/users/1408703/screenshots/4199509/media/0843dfea28c66439d51f222d83336c6f.jpg?resize=800x600&vertical=center",
    },
    {
      Name: "Fresh flowers",
      // Color: "blue",
      Price: 800,
      Rating: 4.5,
      Discount: 30,
      image:
        "https://th.bing.com/th/id/R.1217bc6fa0736d9fddd7be9769848489?rik=bfx4dRK4ZHndfQ&pid=ImgRaw&r=0",
    },

    {
      Name: " Flowers bouquet",
      // Color: "blue",
      Price: 1500,
      Rating: 4.5,
      Discount: 35,
      image:
        "https://imgcdn.floweraura.com/DSC_1243_0.jpg?tr=w-264,dpr-1.5,q-70",
    },
    {
      Name: "Hanging flower pot",
      // Color: "blue",
      Price: 160,
      Rating: 4.5,
      Discount: 35,
      image:
        "https://th.bing.com/th/id/R.1ce8b07c6b448492faf8289183c73afc?rik=YNCOEngQsB2tAg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-HrelgdwC74s%2fT7T0_skP0DI%2fAAAAAAAABMM%2f0ZEA9h9rMmE%2fs1600%2fDSC_0008_edited-1.jpg&ehk=Mka4Nz1JCFF6jdR0QvJjA8LtDjkqfbR2wPZuzN9fFNM%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      Name: "Chocolate bouquet",
      // Color: "blue",
      Price: 1500,
      Rating: 4.5,
      Discount: 5,

      image:
        "https://th.bing.com/th/id/OIP.uXOpyQD7UbOGJDnxV2oF2wHaHa?w=800&h=800&rs=1&pid=ImgDetMain",
    },
    {
      Name: "Bracelets",
      // Color: "blue",
      Price: 1500,
      Rating: 4.5,
      Discount: 5,

      image:
        "https://marcolauren.r.worldssl.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/h/photo_aug_30_4_00_02_pm_4.jpg",
    },
    {
      Name: "Traditional wears",
      // Color: "blue",
      Price: 2000,
      Rating: 4.5,
      Discount: 5,

      image:
        "https://th.bing.com/th/id/R.e96123b5dc1bffd8af9cfa0ce5bf2251?rik=fI01Vk1jFpAlJQ&riu=http%3a%2f%2fnewfashionelle.com%2fwp-content%2fuploads%2f2017%2f02%2fIndian-Party-Dresses-for-Women-2017.jpg&ehk=5MSaluG2vCs2Cf2UTe1M%2fpJQY8T50ehU3FZkIr78sqY%3d&risl=&pid=ImgRaw&r=0",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap  p-4 m-5 ">
        {giftsArr.map((data) => {
          return (
            <div
              key={data.Name}
              onClick={() => router.push("/definations")}
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

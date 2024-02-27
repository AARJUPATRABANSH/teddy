import Link from "next/link";

import React from "react";
type videoCard = {
  title: string;
  desc: string;
  image?: string;
  id: string;
};
const VideoCard = ({ data }: { data: videoCard }) => {
  return (
    <Link href={`/videos/details/${data.id}`}>
      <div className="w-56 shadow-md rounded-md p-3 bg-slate-50 h-fit  ">
        <img
          src={
            data.image
              ? data.image
              : "https://images.pexels.com/photos/19035715/pexels-photo-19035715/free-photo-of-butterfly-sitting-on-lavender-plants-in-provence-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          }
          alt="images"
          // className="h-auto max-w-full rounded-lg"
        />
        <div className="p-2 flex flex-col gap-y-1">
          <h1>{data.title} </h1>
          <p className="text-[14px]">{data.desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;

//  passing props

"use client";
import { giftsArr } from "@/utils/data";
import { TGift } from "@/utils/types";
import React, { useEffect, useState } from "react";

type TGiftDetailsProps = {
  params: {
    id: string;
  };
};

const page = ({ params }: TGiftDetailsProps) => {
  const teddyId = params.id;

  return (
    <div>
      <TeddyDetails teddy_id={teddyId} />
    </div>
  );
};

export default page;

const TeddyDetails = ({ teddy_id }: { teddy_id: string }) => {
  const [giftDetails, setGiftDetails] = useState<TGift | null>(null);

  useEffect(() => {
    const gift = giftsArr.find((teddy) => teddy.id === teddy_id);

    if (gift) {
      setGiftDetails(gift);
    }
  }, [teddy_id]);
  return (
    <>
      <div>
        {giftDetails ? (
          <>
            <div>
              <img
                src={giftDetails.image}
                alt="gift image"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="p-5">
              <h1 className="text-5xl font-bold">{giftDetails.Name}</h1>
              <p className="tex-2xl">Price : ${giftDetails.Price}</p>
              <p className="tex-2xl">Discount : ${giftDetails.Discount}</p>
              <p className="tex-2xl">Rating : ${giftDetails.Rating}</p>
            </div>{" "}
          </>
        ) : (
          <div>
            <h1>Not found</h1>
          </div>
        )}
      </div>
    </>
  );
};

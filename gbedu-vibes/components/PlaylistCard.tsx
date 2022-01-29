// import Image from "next/image";
import { cutString } from "../utils/cutString";

export default function PlaylistCard({
  name,
  des,
  imgSrc,
}: {
  name: string;
  des: string;
  imgSrc: string;
}) {
  return (
    <div className=" bg-offWhite hover:shadow-xl cursor-pointer rounded-md flex flex-col items-center p-5">
      {/* add transition to elements */}
      <div className="rounded-md">
        {/* using img instead of Image from next, because of unknown domain names */}
        <img
          alt="playlist image"
          src={imgSrc || "/getmood.svg"}
          width={200}
          height={200}
          className="rounded-md object-contain shadow-lg"
        />
      </div>
      <div className="mt-2 self-start">
        {name && (
          <p className="font-semibold text-sm  text-left mb-1">{name}</p>
        )}
        {des && (
          <p className="text-xs text-black text-opacity-60 text-left">
            {cutString(des, 23)}
          </p>
        )}
      </div>
    </div>
  );
}

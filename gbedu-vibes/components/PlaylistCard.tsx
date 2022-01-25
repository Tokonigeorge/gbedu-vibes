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
    <div className=" bg-offWhite rounded-md flex flex-col items-center py-3">
      <div className="rounded-md">
        <img
          alt="playlist image"
          src={imgSrc || "/playlistimage.svg"}
          width={200}
          height={200}
          className="rounded-md"
        />
      </div>
      <div className="-mt-2 pl-5 self-start">
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

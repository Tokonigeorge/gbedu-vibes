import Image from "next/image";
import { cutString } from "../utils/cutString";

export default function PlaylistCard({
  name,
  des,
}: {
  name: string;
  des: string;
}) {
  return (
    <div className="w-52 bg-red-200 rounded-md flex flex-col items-center justify-center py-3">
      <div className="rounded-md">
        <Image src="/playlistimage.svg" width={200} height={200} />
      </div>
      <div className="-mt-3">
        {name && <p className="font-semibold">{name}</p>}
        {des && (
          <p className="text-sm text-black text-opacity-60">
            {cutString(des, 23)}
          </p>
        )}
      </div>
    </div>
  );
}

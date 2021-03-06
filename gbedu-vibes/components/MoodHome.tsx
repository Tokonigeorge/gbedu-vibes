import Image from "next/image";
import Link from "next/link";

export default function MoodHome() {
  return (
    <div className="flex sm:flex-row flex-col sm:items-stretch items-center justify-center mt-24 gap-x-16">
      <div className="sm:w-1/3 w-3/4">
        <Link href="/mood">
          <a>
            <HomeCards moodCard={true} />
          </a>
        </Link>
      </div>
      <div className="sm:w-1/3 w-3/4 mb-16 mt-8 sm:my-0">
        <Link href="/playlistmood">
          <a>
            <HomeCards />
          </a>
        </Link>
      </div>
    </div>
  );
}

const HomeCards = ({ moodCard }: { moodCard?: boolean }) => {
  return (
    <div
      className={`bg-offWhite w-full flex flex-col items-center justify-center py-4 px-2 rounded-md  hover:ring-2 ${
        moodCard ? "hover:ring-cardGreen" : "hover:ring-cardRed"
      }`}
    >
      <Image
        src={`${moodCard ? "/getmood.svg" : "/getplaylist.svg"}`}
        height={200}
        width={150}
      />
      <p className="text-center font-semibold mt-2 text-sm">
        {moodCard
          ? "Get a mood analysis of your recent playlists."
          : "Get a curated playlist based on any mood."}
      </p>
    </div>
  );
};

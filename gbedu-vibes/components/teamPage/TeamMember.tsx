import Image from "next/image";

export default function TeamMember({
  avatar,
  name,
  position,
}: {
  avatar: any;
  name: string;
  position: string;
}) {
  return (
    <div className="pl-3 mt-16 flex items-center flex-wrap md:flex-nowrap">
      <div className="flex items-center">
        <Image src={avatar} width={100} height={100} />
        <div className="pl-6 md:w-80 w-auto">
          <p className="font-bold tracking-wide">{name}</p>
          <p className="text-sm font-light text-opacity-60 text-black pt-2">
            {position}
          </p>
        </div>
      </div>
      <p className="md:w-1/2 mt-6 md:mt-0 w-full pl-0 md:pl-6 font-light md:border-l md:border-opacity-60 md:border-black text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium luctus
        netus nulla cursus at ipsum leo proin. Amet at blandit non augue cursus
        aliquam fusce eros mauris.
      </p>
    </div>
  );
}

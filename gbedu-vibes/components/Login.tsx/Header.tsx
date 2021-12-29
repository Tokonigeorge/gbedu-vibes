import Image from "Next/image";

export default function Header() {
  return (
    <div className="relative">
      <span className="absolute left-0 top-42">
        <Image src="/leaves.svg" height="50" width="50" />
      </span>
      <Image src="/girl.svg" height="300" width="300" />
      <Image src="/clock.svg" height="50" width="50" />
    </div>
  );
}

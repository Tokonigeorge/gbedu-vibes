import Image from "Next/image";
import styles from "../../styles/gilgongoFont.module.css";

export default function Header() {
  return (
    <div className="flex items-center justify-center flex-col mt-8">
      {/* <span className="hidden md:block">
        {" "}
        <Image src="/header.svg" height="300" width="500" />
      </span> */}
      <span className="block object-contain w-full text-center md:w-1/2">
        {" "}
        <Image src="/header.svg" height="400" width="400" />
      </span>
      <p className="text-center text-sm -mt-4">
        Detect your{" "}
        <span className={`${styles.gbedu} text-brownbase`}>mood</span> through
        your{" "}
        <span className={`${styles.gbedu} text-brownbase`}>recent Gbedu.</span>
      </p>
    </div>
  );
}

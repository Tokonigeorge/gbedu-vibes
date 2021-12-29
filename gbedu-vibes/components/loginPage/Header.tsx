import Image from "Next/image";
import styles from "../../styles/gilgongoFont.module.css";

export default function Header() {
  return (
    <div className="flex items-center justify-center flex-col mt-10">
      <span className="hidden md:block">
        {" "}
        <Image src="/header.svg" height="300" width="500" />
      </span>
      <span className="block md:hidden">
        {" "}
        <Image src="/header.svg" height="500" width="500" />
      </span>
      <p className="text-center text-sm">
        Detect your{" "}
        <span className={`${styles.gbedu} text-brownbase`}>mood</span> through
        your{" "}
        <span className={`${styles.gbedu} text-brownbase`}>recent Gbedu.</span>
      </p>
    </div>
  );
}

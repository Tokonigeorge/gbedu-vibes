import Image from "Next/image";
import Link from "next/link";
import styles from "../styles/animations.module.css";

export default function Gbedu() {
  return (
    <Link href="/">
      <a className={`${styles.items_bounce}`}>
        <Image src="/gbedu.svg" height={40} width={150} />
      </a>
    </Link>
  );
}

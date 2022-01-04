import Link from "next/link";
import Gbedu from "../components/Gbedu";
import styles from "../styles/animations.module.css";

export default function Nav({ showTeam }: { showTeam: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <Gbedu />
      {showTeam && (
        <Link href="/team">
          <a className={`${styles.team_link} text-brownbase`}>Our Team</a>
        </Link>
      )}
    </div>
  );
}

import Link from "Next/Link";
import Gbedu from "../components/Gbedu";

export default function Nav() {
  return (
    <div className="flex justify-between items-center">
      <Gbedu />
      <Link href="/team">
        <a className="text-brownbase">Our Team</a>
      </Link>
    </div>
  );
}

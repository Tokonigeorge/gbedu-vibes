import { loginUrl } from "../../utils/spotify-auth";

export default function Login() {
  return (
    <a
      href={loginUrl}
      className="font-semibold text-white ease-in hover:text-spotifygreen bg-spotifygreen text-xs py-3 hover:bg-white hover:drop-shadow-xl px-16 rounded-full text-center"
    >
      CONNECT WITH SPOTIFY
    </a>
  );
}

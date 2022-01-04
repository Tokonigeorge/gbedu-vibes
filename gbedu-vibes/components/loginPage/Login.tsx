import { loginUrl } from "../../utils/spotify-auth";

export default function Login() {
  return (
    <a
      href={loginUrl}
      className="font-semibold text-white transition-all ease-in-out bg-spotifygreen 
      text-xs py-3 hover:bg-spotifyhovergreen hover:drop-shadow-xl px-12 rounded-full text-center"
    >
      CONNECT WITH SPOTIFY
    </a>
  );
}

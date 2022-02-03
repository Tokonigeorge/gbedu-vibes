import axios from "axios";
import { exitCode } from "process";

export const endpoint: string = "https://accounts.spotify.com/authorize";
const clientId: string = process.env.NEXT_PUBLIC_CLIENT_ID;
const redirectUri: string = "http://localhost:3000/";

const scopes: string[] = [
  "user-library-read",
  // "user-library-modify",
  // "playlist-modify-public",
  "playlist-read-private",
  "playlist-read-collaborative",
  // "playlist-modify-private",
];

export const getToken = (): any => {
  let code: string = window.location.href.split("=")[1];
  console.log(code);
  _getToken(code);
};

const _getToken = (code: string) => {
  axios
    .post("/api/users", { data: code })
    .then((resp) => {
      console.log("resp", resp.data);
    })
    .catch((err) => {
      console.log("ERR", err);
      // alert("Cannot get token");
    });
};

export const loginUrl: string = `${endpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=code&show_dialog=true`;

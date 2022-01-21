import { GetToken } from "../interfaces/index";

export const endpoint: string = "https://accounts.spotify.com/authorize";
const clientId: string = "47330e5a65544359b3c736707cf071ed"; //set to an env variable
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
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((i, item) => {
      let parts = item.split("=");
      i[parts[0]] = decodeURIComponent(parts[1]);
      return i;
    }, {});
};

export const loginUrl: string = `${endpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

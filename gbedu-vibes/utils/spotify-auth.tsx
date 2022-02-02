import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const endpoint: string = "https://accounts.spotify.com/authorize";
const clientId: string = "47330e5a65544359b3c736707cf071ed"; //set to an env variable
const redirectUri: string = "http://localhost:3000/";
const clientSecret: string = "aaf79398cd2848d2a9378647be94c5cb";
const scopes: string[] = [
  "user-library-read",
  // "user-library-modify",
  // "playlist-modify-public",
  "playlist-read-private",
  "playlist-read-collaborative",
  // "playlist-modify-private",
];

export const getToken = (): any => {
  let code = window.location.href.split("=")[1];
  console.log(code);
  _getToken();
  // .reduce((i, item) => {
  //   let parts = item.split("=");
  //   i[parts[0]] = decodeURIComponent(parts[1]);
  //   return i;
  // }, {});
};

const _getToken = () => {
  axios("/api/users")
    .then((resp) => {
      console.log("resp", resp.data);
    })
    .catch((err) => {
      console.log("ERR GETTING SPOTIFY ACCESS TOKEN", err);
    });
};

export const loginUrl: string = `${endpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=code&show_dialog=true`;

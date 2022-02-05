import { getToken } from "./spotify-auth";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyWeb = new SpotifyWebApi();
export const setToken = () => {
  let token: string;
  //get token from local storage
  const tokenObject = JSON.parse(localStorage.getItem("token"));

  if (tokenObject) {
    //if present, check if expired
    if (spotifyWeb.getAccessToken()) {
      //if it's not expired set the access token to the token
      spotifyWeb.setAccessToken(tokenObject?.access_token);
      return (token = tokenObject?.access_token);
    } else {
      //if expired, use refresh token to get new access token
      const refreshToken = tokenObject?.refresh_token;
      getToken(refreshToken).then((resp) => {
        if (resp) {
          localStorage.setItem("token", JSON.stringify(resp));
          spotifyWeb.setAccessToken(resp.access_token);
          return (token = tokenObject?.access_token);
        }
      });
    }
  } else {
    //if object not present in local storage,get it from the window location
    const code: string = window.location.href.split("=")[1];
    getToken(code).then((resp) => {
      if (resp) {
        localStorage.setItem("token", JSON.stringify(resp));
        spotifyWeb.setAccessToken(resp.access_token);
        return (token = resp.access_token);
      }
    });
  }
  return token;
};

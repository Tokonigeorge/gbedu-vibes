import axios from "axios";

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
  if (code) return _getToken(code);
};

const _getToken = async (code: string): Promise<string> => {
  return axios
    .post(
      "/api/users",
      {
        data: JSON.stringify({ code }),
      },
      { headers: { "Content-Type": "application/json" } }
    )
    .then((resp) => {
      return resp.data.refresh_token;
    })
    .catch((err) => {
      console.log("ERR", err);
      alert("Cannot get token");
    });
};

export const loginUrl: string = `${endpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=code&show_dialog=true`;

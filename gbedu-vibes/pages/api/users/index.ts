import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { sampleUserData } from "../../../utils/sample-data";
// import querystring from "querystring"

const clientId: string = "47330e5a65544359b3c736707cf071ed"; //set to an env variable
const redirectUri: string = "http://localhost:3000/";
const clientSecret: string = "aaf79398cd2848d2a9378647be94c5cb";
let code: string =
  "AQA3QDAh2T3kfP1uCXbBfNtatrFzdQlLTDdDTAf4KAvW4ZtMFbnXzJ7-our3YL5wXRCJgve2DA37tk-V6FsHyhubIxy7ATNWVGgpWWYqzljOZheGc6taDvyE3GfR4v_Mfelh72fk4e8FDteh5oPl99b0EXN8rc7I9bFSImv-GzJpGjk8l_nFnjxd61IJYW_6eLExoDfdQWCsxZJHBGxYb5ffP5pxvXs7OcYFUBftUMqsZpFnRT8ZWvJ1Xl_mFvvqdg";
const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  // if (_req.method !== "POST") {
  //   res.status(400).send({ message: "Only POST requests allowed" });
  //   return;
  // }
  const config: AxiosRequestConfig = {
    // url: "https://accounts.spotify.com/api/token",
    // method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    // data: {
    //   code: code,
    //   redirect_uri: redirectUri,
    //   grant_type: "authorization_code",
    // },
  };

  const params = new URLSearchParams();
  params.append("code", code);
  params.append("redirect_uri", redirectUri);
  params.append("grant_type", "authorization_code");
  axios
    .post("https://accounts.spotify.com/api/token", params, config)
    .then((resp) => {
      res.status(200).json(resp.data);
      console.log("resp", resp.data);
    })
    .catch((err) => {
      res.status(500).json({
        error: err.message,
      });
      console.log("ERR GETTING SPOTIFY ACCESS TOKEN", err);
    });
};

export default handler;

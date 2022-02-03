import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const clientId: string = process.env.NEXT_PUBLIC_CLIENT_ID;
const redirectUri: string = "http://localhost:3000/";
const clientSecret: string = process.env.CLIENT_SECRET;

const handler = async (
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (_req.method !== "POST") {
    res.status(400).send({ message: "Only POST requests allowed" });
    return;
  }

  let code: string = JSON.parse(_req.body.data).code;

  //add headers to the config
  const config: AxiosRequestConfig = {
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  /*since axios sends requests in json format, urlserachparams is used to properly parse the data
in the urlencoded format*/
  const params = new URLSearchParams();
  params.append("code", code);
  params.append("redirect_uri", redirectUri);
  params.append("grant_type", "authorization_code");

  return axios
    .post("https://accounts.spotify.com/api/token", params, config)
    .then((resp) => {
      return res.status(200).json(resp.data);
    })
    .catch((err) => {
      return res.status(500).json({
        error: err.message,
      });
    });
};

export default handler;

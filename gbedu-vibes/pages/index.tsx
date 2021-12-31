/* eslint-disable @next/next/no-img-element */
import React, { ContextType, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/Nav";
import Header from "../components/loginPage/Header";
import Login from "../components/loginPage/Login";
import { getToken } from "../utils/spotify-auth";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataContextVal } from "../context/dataContext";
import { updateUserData } from "../context/actions";

const spotifyWeb = new SpotifyWebApi();

const Home: NextPage = () => {
  const [{ user }, dispatch] = useDataContextVal();
  //consider setting user in localstorage so they don't have to login each time?
  const getUser = () => {
    //get object containing the acesstoken
    const _hash = getToken();
    //set the hash of the window to ""
    window.location.hash = "";
    // const _token: string = _hash.access_token;
    const token: string =
      "BQB7833h4jctB0FFhQMEWoOKAHceStiueyTu3cqaa7ABdzUWsgrJJy2UsmOoYjpgn53U8CJTrx-MyVhEECJnuSna0Ifi5EyIXgm0A1PHLgUjssqUrSEcxY7w4ylCW84fomSshM9ZGptvR5y-V17-HB4SxZ7m2lzHX3s61TCeeQAlTStw9gwdyzmFrMLMSlkXmaAC5uspBBuUsf_xFH48ivw1f0NhwC_50hT98vQaEyimLy_iHVIz_2UM6pza3ss";
    spotifyWeb.setAccessToken(token);
    //after setting the accesstoken for aouth, get user
    spotifyWeb.getMe().then((user) => dispatch(updateUserData(user)));
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <Head>
        <title>Gbedu Vibes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/conga.svg" />
      </Head>

      <main className="">
        <div className="pt-6 px-6 md:px-24 sm:px-12">
          <Nav />
          <Header />
          <div className="flex items-center justify-center pt-6">
            <Login />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

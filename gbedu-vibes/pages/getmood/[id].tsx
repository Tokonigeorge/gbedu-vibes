import { GetServerSideProps } from "next";
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { gql, useQuery } from "@apollo/client";

export const firstQuery = gql`
  query LibraryTrackQuery {
    libraryTrack(id: 1) {
      __typename
      ... on LibraryTrack {
        id
      }
      ... on LibraryTrackNotFoundError {
        message
      }
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.query.id, //pass it to the page props
    },
  };
};

const spotifyWeb = new SpotifyWebApi();

export default function getMood({ id }) {
  useEffect(() => {
    spotifyWeb.setAccessToken(localStorage.getItem("token"));
    spotifyWeb
      .getPlaylistTracks(id)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
  }, []);

  // console.log("id", id);
  // const { loading, error, data } = useQuery(firstQuery);
  // if (loading) return <p>Loading</p>;
  // if (error) return console.log(error);
  // console.log(data);

  // return <div>{data ? data?.libraryTrack.message : "Get mood"}</div>;
  return <div>Data</div>;
}

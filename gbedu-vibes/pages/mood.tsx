import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Layout from "../components/Layout";
import { useDataContextVal } from "../context/dataContext";
import SpotifyWebApi from "spotify-web-api-js";
import PlaylistCard from "../components/PlaylistCard";

const spotifyWeb = new SpotifyWebApi();

export default function Mood() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [{ user }] = useDataContextVal();
  /*check if onreload user gets clear, save user data in the session storage? */
  console.log(data);
  useEffect(() => {
    setLoading(true);
    spotifyWeb
      .getUserPlaylists(user?.id)
      .then((response) => {
        setData(response.items);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Layout>
      <div className="bg-background pt-6 px-6 md:px-20 sm:px-12">
        <Nav showTeam={false} />
        <div className="mt-8">
          <p className="font-semibold text-xl">
            {user?.display_name ? `${user?.display_name},` : "Hi,"}
          </p>
          <p className="text-sm text-black text-opacity-60 pt-4">
            Click a playlist to analyze.
          </p>
        </div>
        {/* {loading && <p>Loading...</p>}
        {!data && !loading && <p>No data</p>} */}
        <div className="py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-10 gap-y-8">
          {data?.map((i, indx) => (
            <PlaylistCard
              name={i.name}
              des={i.owner?.display_name}
              key={indx}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

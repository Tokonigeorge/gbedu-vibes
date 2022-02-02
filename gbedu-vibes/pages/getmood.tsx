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

export default function getMood() {
  const { loading, error, data } = useQuery(firstQuery);
  if (loading) return <p>Loading</p>;
  if (error) return console.log(error);
  console.log(data);
  return <div>{data ? data?.libraryTrack.message : "Get mood"}</div>;
}

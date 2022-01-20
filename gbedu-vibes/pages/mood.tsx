import Nav from "../components/Nav";
import Layout from "../components/Layout";
import { useDataContextVal } from "../context/dataContext";

export default function Mood() {
  const [{ user }] = useDataContextVal();
  /*check if onreload user gets clear, save user data in the session storage? */

  return (
    <Layout>
      <div className="bg-background pt-6 px-6 md:px-20 sm:px-12">
        <Nav showTeam={false} />
        <div className="mt-16">
          <p className="font-semibold text-xl">Hi {user?.display_name + ","}</p>
          <p className="text-sm text-black text-opacity-60 pt-4">
            Click a playlist to analyze.
          </p>
        </div>
      </div>
    </Layout>
  );
}

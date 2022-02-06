import Nav from "../components/Nav";
import TeamMember from "../components/teamPage/TeamMember";
import avatarfemale from "../public/avatarfemale.svg";
import avatarmale from "../public/avatarmale.svg";
import Layout from "../components/Layout";

export default function Team() {
  return (
    <Layout>
      <div className="pt-6 px-6 md:px-20 sm:px-12">
        <Nav showTeam={true} />
        <TeamMember
          avatar={avatarfemale}
          name="Ebikefe, Bukola Tokoni"
          position="Software Developer"
          mail="bukolaebikefe@gmail.com"
          github="https://github.com/Tokonigeorge"
        />
        <TeamMember
          avatar={avatarmale}
          name="Nlewedim, Chisombiri Leonard"
          position="Product Designer"
          mail="chisombirileonard@gmail.com"
          github="https://github.com/chisombiri"
          dribble="https://dribble/"
        />
      </div>
    </Layout>
  );
}

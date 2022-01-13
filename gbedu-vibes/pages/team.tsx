import Nav from "../components/Nav";
import TeamMember from "../components/teamPage/TeamMember";
import avatarfemale from "../public/avatarfemale.svg";
import avatarmale from "../public/avatarmale.svg";
import Layout from "../components/Layout";

export default function Team() {
  return (
    <div className="pt-6 px-6 md:px-24 sm:px-12 bg-background h-screen">
      <Layout>
        <Nav showTeam={true} />
        <TeamMember
          avatar={avatarfemale}
          name="Ebikefe, Bukola Tokoni"
          position="Software Developer"
        />
        <TeamMember
          avatar={avatarmale}
          name="Nlewedim, Chisombiri Leonard"
          position="Product Designer"
        />
      </Layout>
    </div>
  );
}

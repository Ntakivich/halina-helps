import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() => import("../components/GithubProfileCard"));
import SEO from "../components/SEO";

export default function Home() {
  return (
    <div>
      <SEO />
      <Navigation />
      <Greetings />
      <Skills />
      <Feedbacks />
      <GithubProfileCard/>
    </div>
  );
}

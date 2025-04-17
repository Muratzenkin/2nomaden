import Achievements from "./main/Achievements";
import MigrationApproach from "./main/MigrationApproach";
import Services from "./main/Services";
import Achievements2 from "./main/Achievements2";
import ContactSection from "./main/ContactSection";
import Hero from "./header/Hero";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Anasayfa | 2 Nomaden</title>
      </Helmet>
      <Hero />
      <Services />
      <Achievements2 />
      <ContactSection />
      <Achievements />
      <MigrationApproach />
    </div>
  );
}

export default Home;

import Achievements from "./main/Achievements";
import MigrationApproach from "./main/MigrationApproach";
import Services from "./main/Services";
import Achievements2 from "./main/Achievements2";
import ContactSection from "./main/ContactSection";
import Hero from "./header/Hero";

function Home() {
  return (
    <div>
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

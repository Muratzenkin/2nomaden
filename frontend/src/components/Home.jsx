import Achievements from "./main/Achievements";
import MigrationApproach from "./main/MigrationApproach";
import Services from "./main/Services";
import Achievements2 from "./main/Achievements2";
import ContactSection from "./main/ContactSection";

function Home() {
  return (
    <div>
      <Services />
      <Achievements2 />
      <ContactSection />
      <Achievements />
      <MigrationApproach />
    </div>
  );
}

export default Home;

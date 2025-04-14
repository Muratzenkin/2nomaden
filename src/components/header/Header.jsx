import bgVideo from "../../../public/image/earth-bg.mp4";
import Hero from "./Hero.jsx";
import Navbar from "../nav/Navbar.jsx";

function Header() {
  return (
    <div>
      <div className="h-[700px] relative">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-[700px] w-full object-cover z-0"
        >
          <source src={bgVideo} type="video/mp4" />{" "}
        </video>
        <Navbar />

        <Hero />
      </div>
    </div>
  );
}

export default Header;

import { useNavigate } from "react-router-dom";
import { Instagram } from "lucide-react";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="relative h-full text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/path/to/your/background-video.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-20 h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:pr-20">
            <h1 className="text-5xl font-extrabold drop-shadow-xl">
              2 NOMADEN <span className="text-blue-400">Wer sind wir?</span>
            </h1>
            <p className="text-lg drop-shadow-md leading-relaxed">
              Wir sind ein Paar, das in Deutschland ein neues Leben beginnt und
              in diesem Prozess das Gelernte mit anderen teilen möchte, um sie
              zu inspirieren. Mit einem radikalen Wandel in unserem Leben in der
              Türkei haben wir uns auf eine Reise nach Deutschland begeben, um
              unsere Träume zu verwirklichen.
            </p>
            <p className="text-lg drop-shadow-md leading-relaxed">
              Hier können Sie unsere Portfolios einsehen, um uns näher
              kennenzulernen.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold shadow-lg transition duration-300 transform hover:scale-105"
              onClick={() => navigate("/haticenur")}
            >
              Hatice Nur
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold shadow-lg transition duration-300 transform hover:scale-105"
              onClick={() => navigate("/murat")}
            >
              Murat
            </button>
          </div>

          {/* Right Content */}
          <div
            className="flex justify-center items-center  bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/image/instagram.jpg')",
            }}
          >
            <div className="text-black rounded-lg p-6 shadow-lg max-w-md text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Folgt uns auf Instagram.
              </h2>
              <p className="text-md mb-6">
                Sind Sie bereit, gemeinsam mit uns Themen zu entdecken, die das
                Leben in Deutschland einfacher und angenehmer machen?
              </p>
              <a
                href="https://www.instagram.com/2gocebe/"
                target="_blank"
                rel="noopener noreferrer"
                className=" px-6 py-3 rounded-md transition duration-300 transform hover:scale-105 text-white font-bold flex items-center gap-2 justify-center"
              >
                <Instagram className="w-6 h-6" /> Folgen
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

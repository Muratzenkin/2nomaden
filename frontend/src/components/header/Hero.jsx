import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen text-white">
      {/* Arka Plan Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/image/earth-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10" />

      {/* İçerik */}
      <div className="relative z-20 flex items-center justify-center h-full px-6">
        <div className="max-w-3xl text-center space-y-6">
          <h1 className="text-5xl font-extrabold drop-shadow-xl">
            2 NOMADEN <span className="text-blue-400">Wer sind wir?</span>
          </h1>
          <p className="text-lg drop-shadow-md leading-relaxed">
            Wir sind ein Paar, das in Deutschland ein neues Leben beginnt und in
            diesem Prozess das Gelernte mit anderen teilen möchte, um sie zu
            inspirieren. Mit einem radikalen Wandel in unserem Leben in der
            Türkei haben wir uns auf eine Reise nach Deutschland begeben, um
            unsere Träume zu verwirklichen.
          </p>
          <p className="text-lg drop-shadow-md leading-relaxed">
            Hier können Sie unsere Portfolios einsehen, um uns näher
            kennenzulernen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
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
        </div>
      </div>
    </section>
  );
}

export default Hero;

import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[100vh] bg-gray-100 text-white px-6 py-28 flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Sol: Görsel */}
        <div className="flex justify-center">
          <img
            src="/image/insta-profile.png"
            alt="2 NOMADEN"
            className="w-full max-w-md rounded-2xl shadow-xl"
          />
        </div>

        {/* Sağ: Yazı içeriği */}
        <div className="text-center md:text-left space-y-8">
          <h1 className="text-4xl sm:text-6xl font-extrabold drop-shadow-xl text-gray-400">
            2 NOMADEN <span className="text-indigo-900">Wer sind wir?</span>
          </h1>
          <p className="text-lg sm:text-xl drop-shadow-md leading-relaxed text-gray-800">
            Wir sind ein Paar, das in Deutschland ein neues Leben beginnt und in
            diesem Prozess das Gelernte mit anderen teilen möchte, um sie zu
            inspirieren. Mit einem radikalen Wandel in unserem Leben in der
            Türkei haben wir uns auf eine Reise nach Deutschland begeben, um
            unsere Träume zu verwirklichen.
          </p>
          <p className="text-lg sm:text-xl drop-shadow-md leading-relaxed text-gray-900">
            Hier können Sie unsere Portfolios einsehen, um uns näher
            kennenzulernen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
            <button
              className="bg-brand-accent hover:bg-indigo-700 px-8 py-4 rounded-lg font-extrabold text-gray-800 shadow-lg transition duration-300 transform hover:scale-105"
              onClick={() => navigate("/haticenur")}
            >
              Hatice Nur
            </button>
            <button
              className="bg-brand-accent hover:bg-indigo-700 px-8 py-4 rounded-lg font-extrabold text-gray-800 shadow-lg transition duration-300 transform hover:scale-105"
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

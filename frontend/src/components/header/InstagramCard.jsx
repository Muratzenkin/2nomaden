import { Instagram } from "lucide-react";

function InstagramCard() {
  return (
    <section className="relative w-full  overflow-hidden">
      {/* Arka plan */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/image/insta-profile.png')", // public klasörüne koymalısın
        }}
      ></div>

      {/* Karanlık Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* İçerik */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
        <div className="text-white space-y-6 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">
            Bizi Instagram’da Takip Et!
          </h2>
          <p className="text-lg sm:text-xl drop-shadow-md leading-relaxed">
            📸 Almanya, denkli̇k, vlog ve ilham verici içerikler seni bekliyor.{" "}
            <br />
            <span className="font-bold">@2gocebe</span> hesabımıza göz at!
          </p>
          <a
            href="https://www.instagram.com/2gocebe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            <Instagram className="w-6 h-6" /> Takip Et
          </a>
        </div>
      </div>
    </section>
  );
}

export default InstagramCard;

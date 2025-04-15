import Navbar from "../nav/Navbar.jsx";

function Header() {
  return (
    <div className="relative">
      <Navbar />
      <div className="h-64 bg-brand-background text-brand-text flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-wide">
          Willkommen bei <span className="text-brand-accent">2 NOMADEN</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-xl">
          Göç yolculuğumuzda edindiğimiz bilgi ve deneyimleri paylaşarak ilham
          veriyoruz. Almanya’da yaşam hakkında merak ettiklerin için doğru
          yerdesin.
        </p>
      </div>
    </div>
  );
}

export default Header;

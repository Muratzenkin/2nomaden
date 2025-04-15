import { Instagram, Youtube, Video } from "lucide-react";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="text-center space-y-2 mb-12">
        <p className="text-indigo-700 font-semibold tracking-widest uppercase text-sm">
          7/24
        </p>
        <h2 className="text-4xl font-bold text-gray-800">İletişime Geçin</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* SOL BLOK */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <img
            src="/image/heysen.png"
            alt="contact"
            className="w-full rounded-lg object-cover"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              Her Zaman Yanınızdayız
            </h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Bize istediğiniz zaman ulaşabilirsiniz. Sosyal medya hesaplarımızı
              takip ederek güncel bilgilerden faydalanabilirsiniz.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-2">TAKİP ET</p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/2gocebe/"
                className="bg-gray-100 hover:bg-pink-400 p-3 rounded-lg shadow text-black transition"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-blue-400 p-3 rounded-lg shadow text-black transition"
              >
                <Video className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-red-500 p-3 rounded-lg shadow text-black transition"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* SAĞ BLOK */}
        <ContactForm />
        {/* <form className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold">Adınız:</label>
              <input
                type="text"
                className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="text-sm font-semibold">
                Telefon Numaranız:
              </label>
              <input
                type="text"
                className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold">Email:</label>
            <input
              type="email"
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Konu:</label>
            <input
              type="text"
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Mesajınız:</label>
            <textarea
              rows="5"
              className="w-full mt-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg shadow-lg transition"
          >
            GÖNDER
          </button>
        </form> */}
      </div>
    </section>
  );
}

export default ContactSection;

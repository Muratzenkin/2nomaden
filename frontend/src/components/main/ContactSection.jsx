import { Instagram } from "lucide-react";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";

function ContactSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="text-center space-y-2 mb-12">
        <p className="text-indigo-700 font-semibold tracking-widest uppercase text-sm">
          {t("contact.always_available")}
        </p>
        <h2 className="text-4xl font-bold text-gray-800">
          {t("contact.title")}
        </h2>
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
              {t("contact.hey_you")}
            </h3>
            <p className="text-gray-600 mt-2 leading-relaxed">
              {t("contact.description")}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-2">
              {t("contact.follow_us")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/2gocebe/"
                className="bg-gray-100 hover:bg-pink-400 p-3 rounded-lg shadow text-black transition"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* SAĞ BLOK */}
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;

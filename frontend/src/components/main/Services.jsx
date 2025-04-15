import { Monitor, Zap, Globe } from "lucide-react";

function Services() {
  const services = [
    {
      icon: <Monitor className="w-10 h-10 text-indigo-800" />,
      title: "Online Görüşmeler ile Birebir Danışmanlık",
      description:
        "Denklik, öğrenci vizesi ve Almanya’ya göç yolları hakkında birebir online görüşmeler yaparak tüm sorularınızı yanıtlıyor, aklınızdaki soru işaretlerini gideriyoruz.",
    },
    {
      icon: <Zap className="w-10 h-10 text-indigo-800" />,
      title: "Mesleki Denklik ve Süreç Yönetimi",
      description:
        "Almanya’da mesleki denklik almak isteyenler için mentorluk hizmeti ve tam kapsamlı süreç yönetimi sunuyoruz. Gerekli belgeler, başvuru süreci ve resmi prosedürler konusunda profesyonel destek sağlıyoruz.",
    },
    {
      icon: <Globe className="w-10 h-10 text-indigo-800" />,
      title: "Öğrenci Vizesi Danışmanlığı",
      description:
        "Almanya’da üniversite veya yüksek lisans eğitimi almak isteyenler için tam kapsamlı öğrenci vizesi danışmanlığı sunuyoruz. Başvuru sürecinden kabul belgelerine kadar tüm adımlarda rehberlik ediyoruz.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <h5 className="text-indigo-900 font-bold uppercase tracking-wide">
          2 Nomaden
        </h5>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          Neler Yapıyoruz
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start space-y-4 hover:shadow-2xl transition"
          >
            <div>{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

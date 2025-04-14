function Achievements() {
  const items = [
    "Eğitim",
    "Profesyonel Danışmanlık",
    "7/24 Destek",
    "Kesin Çözümler",
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p className="text-indigo-800 uppercase tracking-widest text-sm font-semibold">
          yolda ögrendiklerimiz ile beraber gelisiyoruz
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
          Kazanımlar
        </h2>

        {/* Kazanım kutuları */}
        <div className="mt-12 bg-gradient-to-r from-gray-100 to-white p-2 rounded-xl shadow-md flex flex-col sm:flex-row justify-center gap-4 sm:gap-0 sm:divide-x">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-1 px-6 py-4 text-center text-gray-800 font-medium text-lg hover:text-indigo-800 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;

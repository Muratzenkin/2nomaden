function Achievements() {
  const patientChallenges = [
    {
      icon: "🔍",
      title: "Behandlungswahl",
      description:
        "Patient:innen wissen nicht, welche Behandlung die passende für sie ist.",
    },
    {
      icon: "🔒",
      title: "Behandlungszugang",
      description:
        "Patient:innen in Deutschland warten im Schnitt mehr als 5 Monate auf einen Behandlungsplatz.",
    },
    {
      icon: "🎖",
      title: "Behandlungsqualität",
      description:
        "Es gibt keine einheitlichen Qualitätskriterien, die eine hochwertige Versorgung kennzeichnen.",
    },
  ];

  const therapistChallenges = [
    {
      icon: "⏰",
      title: "Arbeitsbelastung",
      description:
        "38 % ihrer Zeit verbringen Therapeut:innen nicht mit ihren Patient:innen.",
    },
    {
      icon: "😕",
      title: "Arbeitszufriedenheit",
      description:
        "Therapeut:innen sind mit der Mitarbeit und Adhärenz von 50 % ihrer Patient:innen nicht zufrieden.",
    },
    {
      icon: "📄",
      title: "Papierlastige Abläufe",
      description:
        "Dokumentation, Anträge, Briefversand und Arbeitsblätter erhöhen den administrativen Aufwand.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-10">
              Herausforderungen für Patient:innen
            </h2>
            <ul className="space-y-8">
              {patientChallenges.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-10">
              Herausforderungen für Therapeut:innen
            </h2>
            <ul className="space-y-8">
              {therapistChallenges.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 text-green-500 flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;

function MigrationApproach() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-24 relative">
      <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-16 lg:mb-0 relative">
          <div className="absolute inset-0 bg-blue-200 rounded-full w-[90%] h-[90%] mx-auto transform -translate-y-6 -translate-x-6"></div>
          <div className="relative z-10 p-8">
            <h3 className="text-sm font-semibold uppercase text-blue-500 tracking-wide mb-6">
              Unser Ansatz
            </h3>
            <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Jeder verdient die besten Chancen für einen Neuanfang in
              Deutschland.
            </h2>
          </div>
        </div>

        <div className="lg:w-1/2 lg:pl-16">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Wir setzen uns dafür ein, Migrant:innen zu unterstützen, um neue
            Perspektiven und Möglichkeiten zu schaffen. Durch
            Bildungsinitiativen und Beratungsdienste fördern wir eine
            erfolgreiche Integration und stärken die Gemeinschaft.
          </p>
          <button className="px-8 py-4 border-2 border-green-500 text-green-500 font-bold rounded-lg hover:bg-green-500 hover:text-white transition-all shadow-md hover:shadow-lg">
            Mehr erfahren
          </button>
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <img
          src="./public/image/dekolaef.avif"
          alt="Decorative Leaf"
          className="w-24 opacity-50"
        />
      </div>
    </section>
  );
}

export default MigrationApproach;

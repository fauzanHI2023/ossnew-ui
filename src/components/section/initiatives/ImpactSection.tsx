export default function ImpactSection() {
  return (
    <section id="impact" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-6 text-black">Our Collective Impact</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">Together, we're making a difference across Indonesia</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-[#268ece]/5 rounded-xl p-8">
            <div className="text-5xl text-[#268ece] mb-2">59,313</div>
            <div className="text-lg text-gray-700">Total Rightholders</div>
          </div>
          <div className="bg-[#268ece]/5 rounded-xl p-8">
            <div className="text-5xl text-[#268ece] mb-2">34</div>
            <div className="text-lg text-gray-700">Provinces Reached</div>
          </div>
          <div className="bg-[#268ece]/5 rounded-xl p-8">
            <div className="text-5xl text-[#268ece] mb-2">4</div>
            <div className="text-lg text-gray-700">Active Programs</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <section id="products" className="py-16 px-8 bg-gray-100 text-center">
      <h3 className="text-2xl font-semibold mb-8">Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Investments", desc: "Diverse portfolio options including funds and equity instruments." },
          { title: "Consulting", desc: "Expert financial advice tailored to your business or personal goals." },
          { title: "Asset Management", desc: "Professional management of your wealth for long-term growth." }
        ].map((item, i) => (
          <div key={i} className="border p-6 rounded shadow">
            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
            <p>{item.desc}</p>
            <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

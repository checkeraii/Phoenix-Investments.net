export default function About() {
  return (
    <section className="py-16 px-8 text-center">
      <h3 className="text-2xl font-semibold mb-8">About Us</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Expertise", desc: "Top-tier investment professionals guiding your capital growth." },
          { title: "Transparency", desc: "Clear strategies and reporting aligned with your goals." },
          { title: "Personalized Approach", desc: "Tailored investment portfolios to suit your financial vision." }
        ].map((item, i) => (
          <div key={i} className="border p-6 rounded shadow">
            <h4 className="text-xl font-bold mb-2">{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

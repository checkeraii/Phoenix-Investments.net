export default function Contact() {
  return (
    <section id="contact" className="py-16 px-8 text-center">
      <h3 className="text-2xl font-semibold mb-8">Contact & Support</h3>
      <form className="max-w-2xl mx-auto space-y-4">
        <input type="text" placeholder="Name" className="w-full border px-4 py-2" />
        <input type="email" placeholder="Email" className="w-full border px-4 py-2" />
        <textarea placeholder="Message" className="w-full border px-4 py-2" rows="4"></textarea>
        <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">Send Message</button>
      </form>
    </section>
  );
}

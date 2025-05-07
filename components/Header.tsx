export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold">PhoenixInvestments.eu</h1>
      <nav className="space-x-4">
        <a href="#" className="hover:underline">Home</a>
        <a href="#products" className="hover:underline">Products</a>
        <a href="#team" className="hover:underline">Team</a>
        <a href="#insights" className="hover:underline">Insights</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
      <button className="bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-200">Apply Now</button>
    </header>
  );
}

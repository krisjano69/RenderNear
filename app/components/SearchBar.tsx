export default function SearchBar() {
    return (
    <div className="bg-[radial-gradient(ellipse_200%_100%_at_top_left,#782614,#010100_80%)] pt-20">
      <div className="pt-20">
      <h1 className="text-white text-6xl text-center pb-8">Search for services</h1>
    </div>

      <div className="mb-0 text-center pt-0">
        <input
          type="text"
          placeholder="Search for a service"
          className="w-1/2 p-4 border border-gray-300 rounded-lg"
        />
        <p className="mt-2 text-sm">Filters will be added here later</p>
      </div></div>
    );
  }
  
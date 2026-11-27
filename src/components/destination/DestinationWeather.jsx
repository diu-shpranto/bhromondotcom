const DestinationWeather = ({ location }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-stone-900 mb-6">আজকের আবহাওয়া</h2>
      <div className="bg-white rounded-2xl ring-1 ring-stone-100 shadow-sm p-6 text-stone-600">
        {/* এখানে Weather widget call হবে */}
      </div>
    </div>
  );
};

export default DestinationWeather;
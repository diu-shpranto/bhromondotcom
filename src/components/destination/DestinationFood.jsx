const DestinationFood = ({ foods }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-stone-900 mb-6">স্থানীয় খাবার</h2>

      <ul className="grid md:grid-cols-2 gap-6">
        {foods.map((food, index) => (
          <li key={index} className="bg-white p-5 rounded-2xl ring-1 ring-stone-100 shadow-sm text-stone-600">
            🍽 {food}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationFood;
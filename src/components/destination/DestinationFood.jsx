const DestinationFood = ({ foods }) => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-6">স্থানীয় খাবার</h2>

      <ul className="grid md:grid-cols-2 gap-4">
        {foods.map((food, index) => (
          <li key={index} className="bg-white p-4 rounded-xl shadow">
            🍽 {food}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DestinationFood;
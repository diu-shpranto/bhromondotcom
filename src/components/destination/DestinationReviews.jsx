import { useState } from "react";

const DestinationReviews = () => {
  const [reviews, setReviews] = useState([]);

  const [text, setText] = useState("");

  const addReview = () => {
    setReviews([...reviews, { text }]);
    setText("");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-stone-900 mb-6">User Reviews</h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          placeholder="আপনার মতামত লিখুন..."
        />
        <button
          onClick={addReview}
          className="shrink-0 bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-2xl transition"
        >
          Add
        </button>
      </div>

      {reviews.map((review, index) => (
        <div key={index} className="bg-white p-5 rounded-2xl ring-1 ring-stone-100 shadow-sm mb-4 text-stone-600">
          {review.text}
        </div>
      ))}
    </div>
  );
};

export default DestinationReviews;
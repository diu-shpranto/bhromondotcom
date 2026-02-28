import { useState } from "react";

const DestinationReviews = () => {
  const [reviews, setReviews] = useState([]);

  const [text, setText] = useState("");

  const addReview = () => {
    setReviews([...reviews, { text }]);
    setText("");
  };

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-6">User Reviews</h2>

      <div className="flex gap-4 mb-6">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border px-4 py-2 rounded-xl w-full"
          placeholder="আপনার মতামত লিখুন..."
        />
        <button
          onClick={addReview}
          className="bg-blue-600 text-white px-6 rounded-xl"
        >
          Add
        </button>
      </div>

      {reviews.map((review, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-xl mb-4">
          {review.text}
        </div>
      ))}
    </div>
  );
};

export default DestinationReviews;
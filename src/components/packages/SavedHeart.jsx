import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { useSaved } from "../../utils/saved";

// প্যাকেজ কার্ডের ওপরে হার্ট — "পরে দেখব"-এ রাখা/সরানো।
// Link-এর ভেতরে বসে না, তাই ক্লিক করলে ডিটেইল পেজে যায় না।
const SavedHeart = ({ pkgId, className = "" }) => {
  const { isSaved, toggle } = useSaved();
  const saved = isSaved(pkgId);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(pkgId);
      }}
      aria-pressed={saved}
      aria-label={saved ? "পরে দেখব থেকে সরান" : "পরে দেখব-এ রাখুন"}
      title={saved ? "পরে দেখব-এ রাখা আছে" : "পরে দেখব-এ রাখুন"}
      className={`w-9 h-9 flex items-center justify-center rounded-full bg-white/95 shadow hover:bg-white transition ${className}`}
    >
      {saved ? (
        <HeartSolid className="w-5 h-5 text-rose-500" />
      ) : (
        <HeartOutline className="w-5 h-5 text-stone-600" />
      )}
    </button>
  );
};

export default SavedHeart;

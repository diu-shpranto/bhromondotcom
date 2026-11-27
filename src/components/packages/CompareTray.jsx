// নিচে ভেসে থাকা তুলনা বার — ১টি বাছলেই দেখা যায়, ২টি হলেই তুলনা করা যায়।
const CompareTray = ({
  selected,
  onOpen,
  onRemove,
  onClear,
  notice,
}) => {
  if (selected.length === 0) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 z-50">
      <div className="bg-forest text-white rounded-2xl shadow-2xl px-4 py-3 flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap gap-2 min-w-0">
          {selected.map((pkg) => (
            <span
              key={pkg.id}
              className="inline-flex items-center gap-1.5 bg-white/10 rounded-full pl-3 pr-1.5 py-1 text-xs font-medium max-w-[160px]"
            >
              <span className="truncate">{pkg.title}</span>
              <button
                onClick={() => onRemove(pkg.id)}
                aria-label={`${pkg.title} তুলনা থেকে সরান`}
                className="w-5 h-5 shrink-0 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-xs leading-none"
              >
                ✕
              </button>
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={onClear}
            className="text-xs font-medium text-white/80 hover:text-white px-2 py-2"
          >
            সরান
          </button>
          <button
            onClick={onOpen}
            disabled={selected.length < 2}
            className="px-4 py-2 rounded-xl bg-amber-400 text-stone-900 text-sm font-bold hover:bg-amber-300 transition disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
          >
            তুলনা করুন ({selected.length})
          </button>
        </div>

        {notice && (
          <p className="w-full text-xs text-amber-300">{notice}</p>
        )}
      </div>
    </div>
  );
};

export default CompareTray;

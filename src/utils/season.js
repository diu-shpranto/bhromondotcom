// Season helpers — month matching against destinationsData.bestTime
// (e.g. "নভেম্বর – মার্চ"). Used by the home trip finder and PackagesPage.
// Unparseable / missing bestTime means the destination is treated as
// visitable all year, so no package is ever hidden by a bad string.

const MONTH_NUMBERS = {
  "জানুয়ারি": 1,
  "ফেব্রুয়ারি": 2,
  "ফেব্রুয়ারি": 2,
  "মার্চ": 3,
  "এপ্রিল": 4,
  "মে": 5,
  "জুন": 6,
  "জুলাই": 7,
  "আগস্ট": 8,
  "সেপ্টেম্বর": 9,
  "অক্টোবর": 10,
  "নভেম্বর": 11,
  "ডিসেম্বর": 12,
};

// Normalize the two encodings of য় (U+09DF vs য + ় U+09BC) by stripping
// the nukta entirely, so lookups never miss on encoding.
const normalize = (s) =>
  (s || "")
    .replace(/়/g, "")
    .replace(/য়/g, "য")
    .trim();

function monthNumber(name) {
  const n = normalize(name);
  const exact = Object.keys(MONTH_NUMBERS).find((k) => normalize(k) === n);
  if (exact) return MONTH_NUMBERS[exact];
  // Fallback: prefix match on the first 4 characters.
  const key = Object.keys(MONTH_NUMBERS).find(
    (k) => normalize(k).slice(0, 4) === n.slice(0, 4)
  );
  return key ? MONTH_NUMBERS[key] : null;
}

export function parseBestTime(bestTime) {
  if (!bestTime) return null;
  const parts = String(bestTime).split(/[–—-]/).map((p) => p.trim());
  if (parts.length < 2) return null;
  const start = monthNumber(parts[0]);
  const end = monthNumber(parts[1]);
  if (!start || !end) return null;
  return { start, end };
}

export function isInSeason(bestTime, month) {
  const range = parseBestTime(bestTime);
  if (!range) return true;
  const m = parseInt(month, 10);
  if (!m || m < 1 || m > 12) return true;
  if (range.start <= range.end) return m >= range.start && m <= range.end;
  return m >= range.start || m <= range.end;
}

// Months offered by the home trip finder (the winter season).
export const MONTH_OPTIONS = [
  { value: "12", label: "ডিসেম্বর ২০২৬" },
  { value: "1", label: "জানুয়ারি ২০২৭" },
  { value: "2", label: "ফেব্রুয়ারি ২০২৭" },
  { value: "3", label: "মার্চ ২০২৭" },
];

export function monthLabel(value) {
  const found = MONTH_OPTIONS.find((o) => o.value === String(value));
  if (found) return found.label;
  const names = {
    1: "জানুয়ারি",
    2: "ফেব্রুয়ারি",
    3: "মার্চ",
    4: "এপ্রিল",
    5: "মে",
    6: "জুন",
    7: "জুলাই",
    8: "আগস্ট",
    9: "সেপ্টেম্বর",
    10: "অক্টোবর",
    11: "নভেম্বর",
    12: "ডিসেম্বর",
  };
  return names[parseInt(value, 10)] || "";
}

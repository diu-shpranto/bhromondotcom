import { useState, useEffect, useCallback } from "react";

// "পরে দেখব" — সেভ করা প্যাকেজের id localStorage-এ থাকে, লগইন লাগে না।
const KEY = "bhromon-saved-v1";
const EVENT = "bhromon-saved-change";

export function getSavedIds() {
  try {
    const raw = localStorage.getItem(KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr.filter((n) => Number.isInteger(n)) : [];
  } catch {
    return [];
  }
}

export function toggleSaved(id) {
  const ids = getSavedIds();
  const next = ids.includes(id)
    ? ids.filter((x) => x !== id)
    : [...ids, id];
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // storage না থাকলেও event-এর মাধ্যমে in-memory state আপডেট হবে
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: next }));
  return next;
}

export function useSaved() {
  const [savedIds, setSavedIds] = useState(() => getSavedIds());

  useEffect(() => {
    const onChange = (e) => setSavedIds(e.detail || getSavedIds());
    window.addEventListener(EVENT, onChange);
    return () => window.removeEventListener(EVENT, onChange);
  }, []);

  const toggle = useCallback((id) => toggleSaved(id), []);
  const isSaved = useCallback((id) => savedIds.includes(id), [savedIds]);

  return { savedIds, savedCount: savedIds.length, isSaved, toggle };
}

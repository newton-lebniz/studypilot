export const STORAGE_KEYS = {
  timetable: "studypilot:timetable",
  topics: "studypilot:topics",
  checkIns: "studypilot:check-ins",
  digest: "studypilot:digest",
} as const;

export function loadFromStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;

  try {
    const stored = window.localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function saveToStorage<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Failed to save StudyPilot data:", error);
  }
}

export function removeFromStorage(key: string): void {
  if (typeof window === "undefined") return;

  window.localStorage.removeItem(key);
}

export function loadFromLocalStorage(key: string) {
  const data = localStorage.getItem(key);

  if (data) return JSON.parse(data);

  return null;
}

export function saveToLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeFromLocalStorage(key: string) {
  localStorage.removeItem(key);
}

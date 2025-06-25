import { useState, useEffect } from 'react';

function fetchFromStorage(key: string, initialValue: any) {
  // fetch value first if item exists
  let value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }

  // if no value exists use initialValue provided.
  if (initialValue instanceof Function) {
    value = initialValue();
    return value;
  }

  return initialValue;
}

export function useLocalStorage(key: string, initialValue: any) {
  const [storedValue, setStoredValue] = useState(() => fetchFromStorage(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue]);

  return [storedValue, setStoredValue];
}
import { useState, useEffect } from "react";

export function useDebounceValue(value: string, time: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), time);

    return () => clearTimeout(timeout); // CLEAROUT PREVIOUS VALUE ON NEXT VALUE CHANGE
  }, [value, time]);
  return debouncedValue;
}

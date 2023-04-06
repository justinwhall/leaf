/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';

/**
 * Given a value and a delay, returns a debounced value
 * @param value the value to debounce
 * @param delay the delay in milliseconds
 * @returns the debounced value
 */
export function useDebounce(value: string, delay: number): string {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay],
  );
  return debouncedValue;
}

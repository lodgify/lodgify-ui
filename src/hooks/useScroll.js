import { useState, useEffect } from 'react';
import { debounce } from 'debounce';

const DEBOUNCE_INTERVAL = 100;

export const useScroll = (
  callback,
  initialValue,
  debounceInterval = DEBOUNCE_INTERVAL
) => {
  const [result, setResult] = useState(initialValue);
  const handleScroll = debounce(event => {
    setResult(callback(event));
  }, debounceInterval);

  useEffect(() => {
    global.document.addEventListener('scroll', handleScroll);
    return () => {
      global.document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return result;
};

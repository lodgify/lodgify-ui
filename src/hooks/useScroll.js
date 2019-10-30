import { useState, useEffect } from 'react';
import { debounce } from 'debounce';

const SCROLL_DEBOUNCE_INTERVAL = 300;

export const useScroll = (callback, initialValue) => {
  const [result, setResult] = useState(initialValue);
  const handleScroll = debounce(event => {
    setResult(callback(event));
  }, SCROLL_DEBOUNCE_INTERVAL);

  useEffect(() => {
    global.document.addEventListener('scroll', handleScroll);
    return () => {
      global.document.removeEventListener('scroll', handleScroll);
    };
  });
  return result;
};

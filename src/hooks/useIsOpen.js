import { useState } from 'react';

export const useIsOpen = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  return [isOpen, () => setIsOpen(!isOpen)];
};

import { useEffect } from 'react';

const useOnClickOutside = (currentState, ref, updater) => {
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (currentState && ref.current && !ref.current.contains(e.target)) {
        updater(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [currentState, ref, updater]);
};
export default useOnClickOutside;

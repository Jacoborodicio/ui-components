import { useState, useCallback } from "react";

/**
 * useToggle is a custom hook to manage a boolean toggle state.
 * @param {boolean} initialState - The initial state of the toggle (default: false).
 * @returns {[boolean, function]} - An array containing the current state and a toggle function.
 */
const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  // A callback to toggle the state
  const toggle = useCallback(() => setState((prev) => !prev), []);

  return [state, toggle];
};

export default useToggle;

// libs
import { useEffect } from "react";

export default function useEventListener(eventName, isHover, handler) {
  useEffect(
    () => {
      const isSupported = window && window.addEventListener;
      if (!isSupported) return;
      console.log(isHover);
      if (isHover === true) {
        // Add event listener
        window.addEventListener(eventName, handler);
      } else {
        // Remove event listener
        window.removeEventListener(eventName, handler);
      }
    },
    [eventName, isHover, handler] // Re-run if eventName or element changes
  );
}

import { useEffect, RefObject } from "react";

const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  callback: (event: MouseEvent) => void
) => {
  useEffect(() => {
    const clickHandler = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!ref.current || ref.current.contains(target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, [ref, callback]);
};

export default useOutsideClick;

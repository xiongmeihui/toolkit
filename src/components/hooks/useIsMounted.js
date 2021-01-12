import { useEffect, useRef } from "react";

export default function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return function cleanUp() {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
}

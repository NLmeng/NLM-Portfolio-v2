import { getCookie, setCookie } from "@/utils/cookies";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

// Restores after mount (not during render) so server and client markup match.
export function useCookieIndex(
  name: string,
  initial: number,
  length: number
): [number, Dispatch<SetStateAction<number>>] {
  const [value, setValue] = useState(initial);
  const restored = useRef(false);

  useEffect(() => {
    const raw = getCookie(name);
    const saved = Number(raw);
    if (raw !== null && Number.isInteger(saved) && saved >= 0 && saved < length) {
      setValue(saved);
    }
    restored.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (restored.current) setCookie(name, String(value));
  }, [name, value]);

  return [value, setValue];
}

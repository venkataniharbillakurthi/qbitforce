import { useRef } from "react";

/** Scroll reveal disabled — keeps ref API for existing sections without hiding content. */
export function useScrollReveal<T extends HTMLElement>(_threshold = 0.15) {
  const ref = useRef<T>(null);

  return { ref, visible: true };
}

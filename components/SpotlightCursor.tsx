"use client";

import { useEffect } from "react";

export default function SpotlightCursor() {
  useEffect(() => {
    const supportsInteractiveSpotlight =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!supportsInteractiveSpotlight) {
      return;
    }

    const cards = Array.from(document.querySelectorAll<HTMLElement>(".spotlight-card"));

    const cleanups = cards.map((card) => {
      let frameId = 0;
      let pendingX = 0;
      let pendingY = 0;

      const flushPosition = () => {
        frameId = 0;
        card.style.setProperty("--spotlight-x", `${pendingX}px`);
        card.style.setProperty("--spotlight-y", `${pendingY}px`);
      };

      const queuePosition = (event: PointerEvent) => {
        const rect = card.getBoundingClientRect();
        pendingX = event.clientX - rect.left;
        pendingY = event.clientY - rect.top;

        if (!frameId) {
          frameId = window.requestAnimationFrame(flushPosition);
        }
      };

      const handleEnter = (event: PointerEvent) => {
        card.style.setProperty("--spotlight-opacity", "1");
        queuePosition(event);
      };

      const handleMove = (event: PointerEvent) => {
        queuePosition(event);
      };

      const handleLeave = () => {
        card.style.setProperty("--spotlight-opacity", "0");
      };

      card.addEventListener("pointerenter", handleEnter);
      card.addEventListener("pointermove", handleMove);
      card.addEventListener("pointerleave", handleLeave);

      return () => {
        if (frameId) {
          window.cancelAnimationFrame(frameId);
        }
        card.removeEventListener("pointerenter", handleEnter);
        card.removeEventListener("pointermove", handleMove);
        card.removeEventListener("pointerleave", handleLeave);
      };
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}

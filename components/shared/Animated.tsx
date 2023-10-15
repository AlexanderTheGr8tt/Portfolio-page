"use client";
import React, { useEffect, useRef } from "react";
import { annotate } from "rough-notation";
import { RoughAnnotationType } from "rough-notation/lib/model";

interface Props {
  id: string;
  text: string;
  style: string;
  effectType: RoughAnnotationType;
  color: string;
}

const Animated = ({ id, text, style, effectType, color }: Props) => {
  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const al = elementRef.current;

    if (al) {
      const annotation = annotate(al, { type: effectType, color: color });

      const options = {
        root: null, // Use the viewport as the root
        rootMargin: "0px", // No margins
        threshold: 0.5, // Trigger when at least 50% of the element is in the viewport
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in the viewport, show the annotation
            annotation.show();
            observer.disconnect(); // Stop observing once shown
          }
        });
      }, options);

      observer.observe(al);
    }
  }, [effectType, color]);

  return (
    <span className={style} ref={elementRef} id={id}>
      {text}
    </span>
  );
};

export default Animated;

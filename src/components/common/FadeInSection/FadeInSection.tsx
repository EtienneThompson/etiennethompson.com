import React, {
  FunctionComponent,
  useState,
  useEffect,
  createRef,
} from "react";
import { FadeInSectionProps } from "./FadeInSection.types";
import "./FadeInSection.scss";

export const FadeInSection: FunctionComponent<FadeInSectionProps> = (
  props: FadeInSectionProps
) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef: React.RefObject<HTMLInputElement> = createRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
  }, [domRef]);

  return (
    <div
      className={`fade-in-section-container ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

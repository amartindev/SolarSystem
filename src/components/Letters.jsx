import { useEffect, useRef, useState } from "react";
import anime from "animejs";

const Letters = ({ playAnimation, description }) => {
  const textWrapperRef = useRef(null);
  const [animatedText, setAnimatedText] = useState("");

  useEffect(() => {
    if (playAnimation) {
      const originalText = description;
      const animatedTextArray = originalText.split(" ").map((word, index) => {
        const space = index > 0 ? " " : "";
        return `${space}<span class='word' key=${index}>${word.split("").map((char, charIndex) => {
          return `<span class='letter' key=${charIndex}>${char}</span>`;
        }).join("")}</span>`;
      });

      setAnimatedText(animatedTextArray.join(""));
    }
  }, [playAnimation, description]);

  useEffect(() => {
    if (playAnimation) {

      anime.timeline({ loop: false })
        .add({
          targets: ".ml11 .word",
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 600,
        })
        .add({
          targets: ".ml11 .letter",
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 600,
          offset: "-=300",
          delay: (el, i) => 34 * (i + 1),
        });
    }
  }, [animatedText, playAnimation]);

  return (
    <span className="ml11" ref={textWrapperRef}>
      <span className="text-wrapper">
        <p className="letters" dangerouslySetInnerHTML={{ __html: animatedText }} />
      </span>
    </span>
  );
};

export default Letters;

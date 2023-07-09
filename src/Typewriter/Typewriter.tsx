"use client";
import React, { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  delay?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay = 100 }) => {
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (displayText.length < text.length) {
      timer = setTimeout(() => {
        setDisplayText(
          (prevDisplayText) => prevDisplayText + text[displayText.length]
        );
      }, delay);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [displayText, text, delay]);

  return <p className="text-[4rem] whitespace-normal  ">{displayText}</p>;
};

export default Typewriter;

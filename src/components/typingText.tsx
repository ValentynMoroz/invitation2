import { useEffect, useState } from "react";
import { useParallax } from "../features/hooks/useParallax";

type TypingTextProps = {
  text: string;
  speed?: number; // необов’язковий, дефолт = 50
  className?: string; // необов’язковий, дефолт = ""
};

export default function TypingText({ text, speed = 100, className = "" }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const titleRef = useParallax<HTMLParagraphElement>(0.7);

  useEffect(() => {
    let i = -1;
    const interval = setInterval(() => {
      i++;

      setDisplayedText((prev) => {
        console.log(text[i]);
        return prev + text[i];
      });
      if (i >= text.length - 1) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <p
      ref={titleRef}
      className={`whitespace-pre-wrap relative font-greatVibes inset-0  text-center   mx-auto
                       text-7xl  text-[#F7F3E8]  z-20 h-40 ${className}                before:content-[''] before:absolute before:inset-0 
              before:bg-black/80 before:rounded-t-[30%] before:blur-lg before:-z-10 before:h-[250%]
  `}>
      {displayedText}
      <span className="inline-block w-[2px] h-7 bg-white animate-blink ml-[8px]"></span>
    </p>
  );
}

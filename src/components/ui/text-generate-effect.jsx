import React, { useEffect } from "react";
import { motion, stagger, useAnimation } from "framer-motion";
import { cn } from "../../util/cn"; // Assuming the relative path to the utility file

export const TextGenerateEffect = ({
  words,
  className,
}) => {
  const controls = useAnimation();
  let wordsArray = words.split(" ");
  
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const renderWords = () => {
    return (
      <motion.div animate={controls}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-white opacity-0"
              variants={{
                visible: { opacity: 1 },
              }}
              transition={{
                duration: 2,
                delay: idx * 0.2,
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

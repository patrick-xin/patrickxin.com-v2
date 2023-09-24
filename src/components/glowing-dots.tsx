"use client";

import React, { useState, useEffect } from "react";

const GlowingDots: React.FC = () => {
  // const dotSize = 1; // in pixels
  // const gapSize = 40; // in pixels, equivalent to gap-4 in TailwindCSS
  // const [numberOfDots, setNumberOfDots] = useState(1000);
  const numberOfDots = 1000;
  const initialStates = Array(numberOfDots).fill("off") as Array<
    "off" | "medium" | "high"
  >;
  const [dotStates, setDotStates] = useState(initialStates);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const randomizeGlow = () => {
    const newStates = [...dotStates]; // Clone the current states

    // Identify currently glowing dots
    const glowingDots = newStates
      .map((state, index) => ({
        state,
        index,
      }))
      .filter((dot) => dot.state !== "off");

    // Generate 5 unique random indices for new glowing dots
    const randomIndices: number[] = [];
    while (randomIndices.length < 10) {
      const randomIndex = Math.floor(Math.random() * numberOfDots);
      if (
        !randomIndices.includes(randomIndex) &&
        newStates[randomIndex] === "off"
      ) {
        randomIndices.push(randomIndex);
      }
    }

    // Stagger the glow effect for each new glowing dot
    randomIndices.forEach((dotIndex, i) => {
      setTimeout(() => {
        newStates[dotIndex] = Math.random() < 0.5 ? "medium" : "high";
        setDotStates([...newStates]);
      }, i * 400); // 400ms delay between each dot's glow
    });

    // Stagger the off effect for each currently glowing dot
    glowingDots.forEach((dot, i) => {
      setTimeout(
        () => {
          newStates[dot.index] = "off";
          setDotStates([...newStates]);
        },
        i * 400 + 2000,
      ); // Start turning off after 2 seconds and then 400ms delay between each dot
    });
  };

  useEffect(() => {
    randomizeGlow();
    const id = setInterval(randomizeGlow, 4000);
    setIntervalId(id);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const threshold = 50;

    const newStates = dotStates.map((_, index) => {
      const dotElement = document.querySelector(
        `[data-index="${index}"]`,
      ) as HTMLDivElement;
      const dotRect = dotElement.getBoundingClientRect();
      const dotCenterX = dotRect.left + dotRect.width / 2;
      const dotCenterY = dotRect.top + dotRect.height / 2;

      const distance = Math.sqrt(
        (dotCenterX - mouseX) ** 2 + (dotCenterY - mouseY) ** 2,
      );

      if (distance <= threshold) {
        return "high";
      }
      return "off";
    });

    setDotStates(newStates);
  };

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (intervalId) clearInterval(intervalId);

    setTimeout(() => {
      handleMouseMove(event);
    }, 10);
  };

  const handleMouseLeave = () => {
    setDotStates(initialStates);
    const id = setInterval(randomizeGlow, 4000);
    setIntervalId(id);
  };

  return (
    <div
      data-illustration="true"
      className="absolute inset-0 hidden lg:block"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex h-full flex-wrap gap-10">
        {dotStates.map((state, index) => (
          <div
            key={index}
            className={`h-[1px] w-[1px] transform-none rounded-full bg-primary ${state}`}
            data-index={index}
            data-light="true"
            data-state={state}
          />
        ))}
      </div>
    </div>
  );
};

export default GlowingDots;

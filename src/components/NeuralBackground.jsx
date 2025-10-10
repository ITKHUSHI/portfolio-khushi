import React from "react";

const NeuralBackground = () => {
  const nodes = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 z-0">
      {nodes.map((_, i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full glow float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            backgroundColor: `rgba(0,255,242,${0.5 + Math.random() * 0.5})`,
          }}
        />
      ))}
    </div>
  );
};

export default NeuralBackground;

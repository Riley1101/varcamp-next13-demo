"use client";
import React from "react";

export default function HeartCounter() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <button
      onClick={increment}
      className="flex items-center px-4 py-1 ml-auto text-lg transition-all duration-500 border rounded-full cursor-pointer hover:border-gray-800 border-theme-accent-opaque hover:bg-gradient-to-r hover:from-theme-accent-opaque "
    >
      <span className="pr-4 font-bold"> {count}</span>
      ❤️
    </button>
  );
}

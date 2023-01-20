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
      className="flex items-center px-4 py-1 ml-auto text-lg border border-gray-700 rounded-full cursor-pointer"
    >
      <span className="pr-4 font-bold"> {count}</span>
      ❤️
    </button>
  );
}

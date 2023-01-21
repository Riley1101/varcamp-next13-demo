"use client";

import React from "react";

export function ErrorSimulator() {
  const [clicked, setClicked] = React.useState(false);

  if (clicked) {
    throw new Error("Oh no! Something went wrong.");
  }

  return (
    <button
      className={
        "px-4 transition-all duration-500 text-sm py-2 hover:bg-theme-primary hover:text-black border border-gray-800 rounded-full bg-theme-accent-opaque"
      }
      onClick={() => {
        setClicked(true);
      }}
    >
      Trigger Error
    </button>
  );
}

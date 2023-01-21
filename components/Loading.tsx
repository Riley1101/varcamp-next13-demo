import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="grid w-full p-4 my-4 border border-gray-800 rounded-md bg-opacity-5 from-theme-accent-opaque bg-theme-accent animate-pulse aspect-video place-items-center">
      <span className="block">Loading ...</span>
    </div>
  );
};

export { Loading };

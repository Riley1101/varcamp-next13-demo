"use client"; // Error components must be Client components

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="grid w-full p-4 my-4 border border-gray-800 rounded-md bg-opacity-5 from-theme-accent-opaque bg-theme-primary animate-pulse aspect-video place-items-center">
      <div className="flex flex-col items-center gap-4">
        <h3>Oops ! Something not right</h3>
        <button
          className={
            "px-4 transition-all duration-500 text-sm py-2 hover:bg-theme-primary hover:text-black border border-gray-800 rounded-full bg-theme-accent-opaque"
          }
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

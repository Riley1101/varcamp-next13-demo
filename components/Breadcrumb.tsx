"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
function Breadcrumb() {
  const segments = useSelectedLayoutSegments();
  return (
    <div className="flex items-center gap-4 my-2">
      <span className="lowercase text-theme-accent">Home</span>
      {segments.map((segment) => (
        <span
          key={segment}
          className=" text-theme-accent lowercase before:content-['/'] before:block flex gap-4"
        >
          {segment}
        </span>
      ))}
    </div>
  );
}
export { Breadcrumb };

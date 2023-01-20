"use client";
import Link from "next/link";
import type { Category, SubCategory } from "@/data/fetchItem";
import { TabItem } from "@/components/TabItem";
import HeartCounter from "@/components/HeartCounter";
import cx from "classnames";
import { useSelectedLayoutSegment } from "next/navigation";
type Props = {
  items?: Category[] | SubCategory[];
  base: string;
};

const Tabs = ({ items = [], base }: Props) => {
  const segment = useSelectedLayoutSegment();
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Link
        href={base}
        className={cx(
          "px-4 transition-all duration-500 text-sm py-1 hover:bg-gray-800 border border-gray-800 rounded-full bg-theme-accent-opaque",
          {
            "bg-theme-accent text-black hover:bg-theme-accent":
              segment === null,
          }
        )}
      >
        {base === "/layouts" ? "Browse" : "All"}
      </Link>

      {items.map((tab) => (
        <TabItem key={tab.slug} tab={tab} base={base} />
      ))}
      <HeartCounter />
    </div>
  );
};

export { Tabs };

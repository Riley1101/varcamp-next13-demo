"use client";
import Link from "next/link";
import cx from "classnames";
import { useSelectedLayoutSegment } from "next/navigation";
import type { Category, SubCategory } from "@/data/fetchItem";

type Props = {
  base: string;
  tab: Category | SubCategory;
};

const TabItem = ({ tab, base }: Props) => {
  const segment = useSelectedLayoutSegment();

  return (
    <Link
      href={`/${base}/${tab.slug}`}
      key={tab.slug}
      className={cx(
        "px-4 text-sm py-1 hover:bg-gray-800 transition-all duration-500 border border-gray-800 rounded-full bg-theme-accent-opaque hover:bg-gradient-to-r hover:from-theme-accent-opaque hover:border-gray-800",
        {
          "bg-theme-accent text-black hover:bg-theme-accent":
            segment === tab.slug,
        }
      )}
    >
      {tab.name}
    </Link>
  );
};
export { TabItem };

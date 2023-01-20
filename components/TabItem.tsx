"use client";
import Link from "next/link";
import cx from "classnames";
import { useSelectedLayoutSegments } from "next/navigation";
import type { Category, SubCategory } from "@/data/fetchItem";

type Props = {
  base: string;
  tab: Category | SubCategory;
};

const TabItem = ({ tab, base }: Props) => {
  const segments = useSelectedLayoutSegments();

  return (
    <Link
      href={`/${base}/${tab.slug}`}
      key={tab.slug}
      className={cx(
        "px-4 text-sm py-1 hover:bg-gray-800 border border-gray-800 rounded-full bg-theme-accent-opaque",
        {
          "bg-theme-accent text-black hover:bg-theme-accent": segments.includes(
            tab.slug
          ),
        }
      )}
    >
      {tab.name}
    </Link>
  );
};
export { TabItem };

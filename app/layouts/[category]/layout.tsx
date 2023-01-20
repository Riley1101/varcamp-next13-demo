import { Tabs } from "@/components/Tabs";
import type { PageProps } from "@/types";
import { getCategoriesBySlug } from "@/data/fetchItem";

export default function Layout({ children, params }: PageProps) {
  const category = getCategoriesBySlug(params?.category);
  if (!category) return null;
  return (
    <div className="p-4 border border-gray-800 rounded-md">
      <h2 className="mb-2 text-lg font-bold uppercase text-theme-accent">
        {category.name}
      </h2>
      <Tabs base={`layouts/${params?.category}`} items={category.items} />
      <div className="mt-4">{children}</div>
    </div>
  );
}

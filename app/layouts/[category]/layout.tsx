import { Tabs } from "@/components/Tabs";
import type { PageProps } from "@/types";
import { getCategoriesBySlug } from "@/data/fetchItem";

export default function Layout({ children, params }: PageProps) {
  const category = getCategoriesBySlug(params?.category);
  if (!category) return null;
  return (
    <fieldset className="p-4 border border-gray-800 rounded-md">
      <legend className="px-4 mb-2 text-theme-accent">{category.name}</legend>
      <Tabs base={`layouts/${params?.category}`} items={category.items} />
      <div className="mt-4">{children}</div>
    </fieldset>
  );
}

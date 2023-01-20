import { getCategoriesBySlug, getSubCategory } from "@/data/fetchItem";
import { Card } from "@/components/Card";
import type { PageProps } from "@/types";

export default function CategoryPage({ params }: PageProps) {
  const categories = getSubCategory(params.category, params.subcategory);
  if (categories === undefined)
    return (
      <div className="py-4">
        <div className="text-center text-theme-primary">Items not found</div>
      </div>
    );
  return (
    <>
      <h2 className="mb-4 text-sm text-left ">
        Filtered by
        <span className="ml-2 font-semibold capitalize text-theme-accent">
          {categories.name}
        </span>
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {Array.from({ length: categories?.count }).map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </>
  );
}

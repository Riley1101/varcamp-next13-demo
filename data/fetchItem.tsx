export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};
export type SubCategory = {
  name: string;
  slug: string;
  count: number;
};
export type Category = {
  name: string;
  slug: string;
  count: number;
  items: SubCategory[];
};

export const getCategories = (): Category[] => [
  {
    name: "Pets",
    slug: "pets",
    count: 5,
    items: [
      { name: "Dogs", slug: "dogs", count: 3 },
      { name: "Cats", slug: "cats", count: 4 },
      { name: "Parrots", slug: "parrots", count: 2 },
    ],
  },
  {
    name: "Accessories",
    slug: "accessories",
    count: 8,
    items: [
      { name: "Tops", slug: "tops", count: 3 },
      { name: "Shorts", slug: "shorts", count: 4 },
      { name: "beds", slug: "beds", count: 2 },
    ],
  },
  {
    name: "Foods",
    slug: "foods",
    count: 4,
    items: [
      { name: "Cat foods", slug: "cat-foods", count: 6 },
      { name: "Dog foods", slug: "dog-foods", count: 5 },
      { name: "beans", slug: "beans", count: 1 },
    ],
  },
];

export const getCategoriesBySlug = (slug: string): Category | undefined => {
  return getCategories().find((category) => category.slug === slug);
};

function fetchSubCategory(
  category: Category | undefined,
  subCategorySlug: string | undefined
) {
  return category?.items.find((category) => category.slug === subCategorySlug);
}

export function getSubCategory(
  categorySlug: string,
  subCategorySlug: string | undefined
) {
  const category = getCategoriesBySlug(categorySlug);
  return fetchSubCategory(category, subCategorySlug);
}

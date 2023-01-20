import { Title } from "@/components/Title";
import { PreviewCard } from "@/components/PreviewCard";
const navs = [
  {
    title: "Nested Layouts ",
    description: "Cart page for users to checkout",
    slug: "/layouts",
  },
  {
    title: "Grouped Layouts ",
    description: "Store page for users to browse products",
    slug: "/grouped",
  },
];
export default function Home() {
  return (
    <>
      <Title title="Home" slug="/" />
      <div className="space-y-2">
        <h2 className="text-lg text-theme-accent">Layouts demos</h2>

        <div className="flex flex-wrap gap-4">
          {navs.map((nav) => (
            <PreviewCard
              key={nav.slug}
              title={nav.title}
              description={nav.description}
              slug={nav.slug}
            />
          ))}
        </div>
      </div>
    </>
  );
}

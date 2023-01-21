import { PreviewCard } from "@/components/PreviewCard";
const conventions = [
  {
    title: "Promise ",
    description: "Loading data from external sources",
    slug: "/conventions/promise",
  },
  {
    title: "Error ",
    description: "Creating new error boundaries",
    slug: "/conventions/buggy",
  },
];
const ConvectionPage = async () => {
  return (
    <>
      <fieldset className="p-4 mb-4 border-2 border-dotted rounded-md border-opacity-10 border-theme-accent max-w-max">
        <legend className="px-2 text-sm uppercase text-theme-primary">
          File Conventions
        </legend>
        <div className="flex flex-wrap gap-4">
          {conventions.map((nav) => (
            <PreviewCard
              key={nav.slug}
              title={nav.title}
              description={nav.description}
              slug={nav.slug}
            />
          ))}
        </div>
      </fieldset>
    </>
  );
};

export default ConvectionPage;

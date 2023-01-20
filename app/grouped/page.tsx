import { PreviewCard } from "@/components/PreviewCard";

const client = [
  {
    title: "Cart ",
    description: "Cart page for users to checkout",
    slug: "/grouped/cart",
  },
  {
    title: "Store ",
    description: "Store page for users to browse products",
    slug: "/grouped/store",
  },
];
const admin = [
  {
    title: "Admin ",
    description: "Admin layout for managing products",
    slug: "/grouped/admin",
  },
];
const GroupedPage = () => {
  return (
    <>
      <p className="my-4 text-lg text-gray-400">
        The hierarchy of the app folder maps directly to URL paths. <br />{" "}
        However, it’s possible to break out of this pattern by creating a route
        group.
      </p>
      <ul className="pl-4 mb-6 space-y-2 text-gray-400 list-disc list-inside">
        <li>Organize routes without affecting the URL structure.</li>
        <li>Opting-in specific route segments into a layout</li>
        <li>Opting-in specific route segments into a layout</li>
      </ul>
      <fieldset className="p-4 mb-4 border-2 border-dotted rounded-md border-theme-primary-opaque max-w-max">
        <legend className="px-2 text-sm uppercase text-theme-primary">
          Shop routes
        </legend>
        <div className="flex flex-wrap gap-4">
          {client.map((nav) => (
            <PreviewCard
              key={nav.slug}
              title={nav.title}
              description={nav.description}
              slug={nav.slug}
            />
          ))}
        </div>
      </fieldset>
      <fieldset className="p-4 mb-4 border-2 border-dotted rounded-md border-opacity-10 border-theme-accent max-w-max">
        <legend className="px-2 text-sm uppercase text-theme-primary">
          Admin routes
        </legend>
        <div className="flex flex-wrap gap-4">
          {admin.map((nav) => (
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

export default GroupedPage;

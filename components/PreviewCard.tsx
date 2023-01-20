import Link from "next/link";
interface Props {
  title: string;
  slug: string;
  description: string;
}
function PreviewCard({ title, slug, description }: Props) {
  return (
    <Link
      href={slug}
      className="block p-2 px-4 transition-all duration-500 border rounded-md cursor-pointer max-w-max hover:bg-gradient-to-r hover:from-theme-accent-opaque hover:border-gray-800 border-theme-accent-opaque"
    >
      <h2 className="text-lg text-theme-accent">{title}</h2>
      <span className="block my-1 text-gray-500">{description}</span>
    </Link>
  );
}

export { PreviewCard };

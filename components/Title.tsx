import Link from "next/link";

type Props = {
  title: string;
  slug: string;
};
function Title({ slug, title }: Props) {
  return (
    <legend>
      <Link href={slug}>
        <h2 className="px-4 text-lg transition-all duration-500 cursor-pointer max-w-max text-theme-primary">
          {title}
        </h2>
      </Link>
    </legend>
  );
}
export { Title };

import type { PageProps } from "@/types";
import { Title } from "@/components/Title";
const Layout = (props: PageProps) => {
  return (
    <>
      <Title title="File conventions" slug="/conventions"></Title>

      <ul className="pl-4 mb-6 space-y-2 text-gray-400 list-disc list-inside">
        <li>
          Next.js 13 introduced a new file convention, loading.js, to help you
          create meaningful Loading UI with React Suspense
        </li>
        <li>
          The error.js file convention allows you to gracefully handle runtime
          errors in nested routes. <br />
          Automatically wrap a route segment and its nested children in a React
          Error Boundary.
        </li>
      </ul>
      {props.children}
    </>
  );
};
export default Layout;

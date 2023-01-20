import Link from "next/link";
import { navs, Navs } from "@/utils/navs";
type Props = {};

const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-4 p-4 bg-theme-accent-opaque">
      <div className="p-4 space-y-2 border border-gray-800 rounded-md shadow-md cursor-pointer hover:bg-theme-bg hover:border-gray-800">
        <Link href="/" className="text-xl font-bold text-theme-primary">
          Next.js 13 @ Var.camp
        </Link>
        <p className="text-theme-body">
          Next.js 13 : Making Your Website More Paw-some
        </p>
      </div>
      <div className="px-2 mt-4 space-y-4">
        {navs.map((nav: Navs) => (
          <div key={nav.id}>
            <p className="text-sm font-semibold uppercase text-theme-accent">
              {nav.name}
            </p>
            <ul className="p-2 mt-2">
              {nav.routes.map((route) => (
                <li
                  key={route.id}
                  className="flex w-full p-2 border border-transparent rounded-md hover:bg-theme-accent-opaque group"
                >
                  <Link
                    href={route.path}
                    className="w-full group-hover:text-theme-accent "
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};
export default Sidebar;

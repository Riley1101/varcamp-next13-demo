import Image from "next/image";
import { TabItem } from "./TabItem";
import HeartCounter from "./HeartCounter";
import Link from "next/link";
const tabs = [
  {
    name: "Store",
    slug: "store",
    count: 0,
    item: [],
  },
  {
    name: "Cart",
    slug: "cart",
    item: [],
    count: 0,
  },
];

function Header() {
  return (
    <header className="w-full bg-theme-accent-opaque h-[4em]   flex items-center p-4 rounded-lg border  border-gray-800">
      <Link href="/grouped">
        <Image
          src="/varcamp.png"
          width={45}
          height={45}
          alt="var camp logo"
        ></Image>
      </Link>

      <div className="flex items-center gap-4 ml-auto">
        {tabs.map((tab) => (
          <TabItem tab={tab} key={tab.slug} base={"grouped"} />
        ))}
      </div>
      <div className="min-w-[200px]">
        <HeartCounter />
      </div>
    </header>
  );
}

export { Header };

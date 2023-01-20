import type { PageProps } from "@/types";
import { Header } from "@/components/Header";

const Layout = ({ children }: PageProps) => {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
};

export default Layout;

import type { PageProps } from "@/types";
import { Title } from "@/components/Title";
const Layout = ({ children }: PageProps) => {
  return (
    <>
      <Title title="Grouped layouts" slug="/grouped"></Title>
      {children}
    </>
  );
};

export default Layout;

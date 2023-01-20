import React from "react";
import { Header } from "@/components/Header";
import type { PageProps } from "@/types";

const ShopLayout = ({ children }: PageProps) => {
  return (
    <>
      <Header></Header>
      <div className="mt-4">{children}</div>
    </>
  );
};
export default ShopLayout;

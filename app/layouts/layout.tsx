import React from "react";
import { Tabs } from "@/components/Tabs";
import { getCategories } from "@/data/fetchItem";
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const categories = getCategories();
  return (
    <>
      <Tabs items={categories} base={"layouts"} />
      <div className="mt-8">{children}</div>
    </>
  );
}

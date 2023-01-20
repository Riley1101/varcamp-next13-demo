import React from "react";
import { Tabs } from "@/components/Tabs";
import { getCategories } from "@/data/fetchItem";
import { Title } from "@/components/Title";
type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const categories = getCategories();
  return (
    <>
      <Title title="Layouts" slug="/layouts"></Title>
      <Tabs items={categories} base={"layouts"} />
      <div className="mt-8">{children}</div>
    </>
  );
}

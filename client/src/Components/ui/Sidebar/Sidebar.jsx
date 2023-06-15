import React from "react";
import SidebarSection from "../../layout/SidebarSection";
import SearchSection from "./SearchSection";
import categories from "../../../data/categories";
import brands from "../../../data/brands.js";
import ListSection from "./ListSection";

export default function Sidebar() {
  const categoriesValues = Object.values(categories);
  const brandsValues = Object.values(brands);
  return (
    <section className="w-full md:w-1/4 flex flex-col gap-8">
      <SidebarSection title="Search">
        <SearchSection />
      </SidebarSection>
      <SidebarSection title="Category">
        <ListSection title="category" List={categoriesValues} />
      </SidebarSection>
      <SidebarSection title="Brands">
        <ListSection title="brand" List={brandsValues} />
      </SidebarSection>
    </section>
  );
}

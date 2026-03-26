"use client";

import { FoodPage } from "@/components/FoodPage/FoodPage";
import { usePathname } from "next/navigation";

const RecipePage = () => {
  const id = +usePathname().replace("/", "");

  return <div><FoodPage id={id} /></div>;
};

export default RecipePage;

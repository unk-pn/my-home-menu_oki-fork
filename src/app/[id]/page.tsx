"use client";

import { usePathname } from "next/navigation";

const RecipePage = () => {
  const id = usePathname().replace("/", "");

  return <div>{id}</div>;
};

export default RecipePage;

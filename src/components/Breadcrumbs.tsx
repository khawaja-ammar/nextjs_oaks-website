"use client";

import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname().split("/");
  return <div>Breadcrumbs {pathname}</div>;
}

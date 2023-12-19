"use client";

import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import * as actions from "@/actions";

export default function SearchInput() {
  const search = useSearchParams();

  return (
    <form action={actions.search}>
      <Input name="term" defaultValue={search.get("term") || ""} />
    </form>
  );
}

"use client";

import { useRouter } from "next/navigation";

export default async ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return <div onClick={() => router.back()}>{children}</div>;
};

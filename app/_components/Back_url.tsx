"use client";

import { useRouter } from "next/navigation";

export default ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return <div onTouchEnd={() => router.back()}>{children}</div>;
};

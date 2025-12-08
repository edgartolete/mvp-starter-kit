import { Suspense } from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import Loading from "@/app/loading";

export default function MainProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<Loading/>}>
      <NuqsAdapter>{children}</NuqsAdapter>
    </Suspense>
  );
}

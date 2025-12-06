import { Suspense } from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export default function MainProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<div></div>}>
      <NuqsAdapter>{children}</NuqsAdapter>
    </Suspense>
  );
}

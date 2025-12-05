"use client";

import { DevTools } from "jotai-devtools";
import "jotai-devtools/styles.css";

export default function JotaiDevTools({
  children,
  shouldDisplay = true,
}: Readonly<{
  children: React.ReactNode;
  shouldDisplay?: boolean;
}>) {
  return (
    <>
      {children}
      {shouldDisplay && (
        <DevTools theme="light" options={{ shouldShowPrivateAtoms: false }} />
      )}
    </>
  );
}

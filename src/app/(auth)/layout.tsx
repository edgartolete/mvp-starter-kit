export default function FormPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-dvh flex justify-center items-center p-5">
      <div className="border rounded h-min w-full min-w-60 max-w-96 px-4 py-6 min-h-10">{children}</div>
    </div>
  );
}

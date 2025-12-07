import Paper from "@mui/material/Paper";

export default function FormPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-dvh flex justify-center items-center p-5">
      <Paper
        elevation={4}
        className="h-min w-full min-w-60 max-w-96 px-9 py-10 min-h-10"
      >
        {children}
      </Paper>
    </div>
  );
}

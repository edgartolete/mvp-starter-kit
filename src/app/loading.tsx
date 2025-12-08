import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100dvh"
      }}
    >
      <CircularProgress />
    </Box>
  );
}

import { Box, CircularProgress } from "@mui/material";

function CircularLoader() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}

export default CircularLoader;

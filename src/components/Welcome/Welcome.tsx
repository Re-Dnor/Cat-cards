import { Box, Typography, Container } from "@mui/material";

function Title() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8
      }}
    >
      <Container maxWidth="sm">
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          Album kitties
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          To get a huge relaxation, just scroll with page.
        </Typography>
      </Container>
    </Box>
  );
}

export default Title;

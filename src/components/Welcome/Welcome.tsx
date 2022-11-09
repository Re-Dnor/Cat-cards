import { Box, Typography, Container } from "@mui/material";
import { albumKittiesSubtitle, albumKittiesTitle } from "../../utils/constants";

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
          {albumKittiesTitle}
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          {albumKittiesSubtitle}
        </Typography>
      </Container>
    </Box>
  );
}

export default Title;

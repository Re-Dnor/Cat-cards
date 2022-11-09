import { Container, Typography } from "@mui/material";
import { noCatsTitle } from "../../../utils/constants";

function EmptyCards() {
  return (
    <Container sx={{ py: 8, display: "flex", justifyContent: "center" }} maxWidth="lg">
      <Typography gutterBottom variant="h5" component="h2">
        {noCatsTitle}
      </Typography>
    </Container>
  );
}

export default EmptyCards;

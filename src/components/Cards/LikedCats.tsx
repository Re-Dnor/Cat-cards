import { Container, Typography } from "@mui/material";
import CatCard from "./CatCard";
import { propertiesKitty } from "./slice/cats-slice";

type Props = {
  cats: propertiesKitty[];
};

function LikedCats({ cats }: Props) {
  const likedCats = cats.filter((cat) => cat.like);

  return (
    <>
      {likedCats.length
      ?
      likedCats.map((cat: propertiesKitty) => <CatCard key={cat._id} cat={cat}/>)
      :
      <Container sx={{ py: 8, display: "flex", justifyContent: "center" }} maxWidth="lg">
        <Typography gutterBottom variant="h5" component="h2">
          Woof woof?
        </Typography>
      </Container>
      }
    </>

  );
}

export default LikedCats;
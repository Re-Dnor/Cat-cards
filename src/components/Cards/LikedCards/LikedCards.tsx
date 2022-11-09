import { Grid } from "@mui/material";
import CatCard from "../../Card/Card";
import EmptyCards from "../EmptyCards/EmptyCards";
import { propertiesKitty } from "../slice/cats-slice";

type LikedCardProps = {
  cats: propertiesKitty[];
};

function LikedCards({ cats }: LikedCardProps) {
  const likedCats = cats.filter((cat) => cat.like);

  return (
    <>
      {likedCats.length ? (
        likedCats.map((cat: propertiesKitty) => (
          <Grid item xs={12} sm={6} md={4} key={cat._id}>
            <CatCard cat={cat} />
          </Grid>
        ))
      ) : (
        <EmptyCards />
      )}
    </>
  );
}

export default LikedCards;

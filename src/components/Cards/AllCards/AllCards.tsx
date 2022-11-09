import { Grid } from "@mui/material";
import CatCard from "../../Card/Card";
import { propertiesKitty } from "../slice/cats-slice";

type Props = {
  cats: propertiesKitty[];
};

function AllCards({ cats }: Props) {
  return (
    <>
      {cats.map((cat: propertiesKitty) => (
        <Grid item xs={12} sm={6} md={4} key={cat._id}>
          <CatCard cat={cat} />
        </Grid>
      ))}
    </>
  );
}

export default AllCards;

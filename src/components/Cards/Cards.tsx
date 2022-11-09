import { useState } from "react";
import { useSelector } from "react-redux";
import { Grid, FormControlLabel, Switch } from "@mui/material";
import { selectCats } from "./slice/cats-slice";
import AllCats from "./AllCards/AllCards";
import LikedCats from "./LikedCards/LikedCards";

function Cards() {
  const [filterLikes, setFilterLikes] = useState<boolean>(false);
  const cats = useSelector(selectCats);

  return (
    <>
      <FormControlLabel
        control={<Switch value={filterLikes} onChange={() => setFilterLikes(!filterLikes)} />}
        label="Likes"
        sx={{ pb: 1 }}
      />
      <Grid container spacing={4}>
        {filterLikes ? <LikedCats cats={cats} /> : <AllCats cats={cats} />}
      </Grid>
    </>
  );
}

export default Cards;

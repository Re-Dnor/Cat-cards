import { useState } from "react";
import { useSelector } from "react-redux";
import { Grid, Typography, FormControlLabel, Switch } from "@mui/material";
import { selectCats } from "./slice/cats-slice";
import AllCats from "./AllCats";
import LikedCats from "./LikedCats";

function Content() {
  const [ filterLikes, setFilterLikes ] = useState<boolean>(false);
  const cats = useSelector(selectCats);

  return (
    <>
      <Typography
      component="h2"
      variant="h4"
      align="center"
      color="text.primary"
      gutterBottom
      >
          Who is hiding inside?
        </Typography>
        <FormControlLabel
          control={<Switch value={filterLikes} onChange={() => setFilterLikes(!filterLikes)} />}
          label="Likes"
          />
        <Grid container spacing={4}>
          {filterLikes
          ?
          <LikedCats cats={cats}/>
          :
          <AllCats cats={cats}/>
          }
      </Grid>
    </>
  );
}

export default Content;
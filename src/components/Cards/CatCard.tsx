import { useEffect, useState } from "react";
import { Grid, Card, CardContent, CardActions, Typography, Button, CardMedia, Box } from "@mui/material";
import { Favorite, FavoriteBorder, Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { propertiesKitty, handleLiked, handleRemove } from "./slice/cats-slice";
import { BASE_URL } from "../../utils/constants";
import CircularLoader from "../Load/CircularLoader";

type Props = {
  cat: propertiesKitty
};

function CatCard({ cat }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const [ url, setUrl ] = useState<string>("");

  const isLike = (cat: propertiesKitty): void => {
    const { _id, like } = cat;
    dispatch(handleLiked({ _id, like }));
  };

  const removeKitty = (cat: propertiesKitty) => {
    dispatch(handleRemove(cat._id));
  };

  // useEffect(() => {
  //   fetch(`${BASE_URL}/cat/${cat._id}?width=350&height=350`)
  //     .then(response => response.blob())
  //     .then((image) => {
  //       setUrl(URL.createObjectURL(image));
  //     });
  // });

  useEffect(() => {
    setUrl(`${BASE_URL}/cat/${cat._id}?width=350&height=350`);
  });

  return (
    <Grid item xs={12} sm={6} md={4}>
    <Card
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      {
      url ?
      <CardMedia
        component="img"
        image={url}
        alt="random"
      />
      :
      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "350px",
        height: "350px"
      }}>
        <CircularLoader />
      </Box>
      }
      
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          Box
        </Typography>
        {
        cat.owner !== "null" ?
        <Typography>The owner is {cat.owner}</Typography>
        :
        <Typography>Uknown owner</Typography>
        }
      </CardContent>
      <CardActions sx={{ display: "flex", alignItems: "center" }}>
        <Button size="small" onClick={() => isLike(cat)}>
          {cat.like 
          ?
          <Favorite color="primary"/>
          :
          <FavoriteBorder color="primary"/>
          }
          
        </Button>
        <Button size="small" onClick={() => removeKitty(cat)}>
          <Delete/>
        </Button>
      </CardActions>
    </Card>
  </Grid>
  );
}

export default CatCard;
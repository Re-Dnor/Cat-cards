import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectLoading } from "./slice/cats-slice";
import { useDispatch } from "react-redux";
import { fetchCats } from "./slice/cats-slice";
import { AppDispatch } from "../../store/store";
import { Container } from "@mui/material";
import LinearLoader from "../Load/LinearLoader";
import Content from "./Content";

function Cards() {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      {
      loading
      ?
      <LinearLoader />
      :
      <Content />
      }
    </Container>
  );
}

export default Cards;
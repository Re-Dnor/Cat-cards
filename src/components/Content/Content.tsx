import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectLoading } from "../Cards/slice/cats-slice";
import { useDispatch } from "react-redux";
import { fetchCats } from "../Cards/slice/cats-slice";
import { AppDispatch } from "../../store/store";
import { Container } from "@mui/material";
import LinearLoader from "../Loader/LinearLoader";
import Cards from "../Cards/Cards";

function Content() {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  return <Container maxWidth="lg">{loading ? <LinearLoader /> : <Cards />}</Container>;
}

export default Content;

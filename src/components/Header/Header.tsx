import { AppBar, Toolbar, Typography } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { albumKittiesTitle } from "../../utils/constants";

function Header() {
  return (
    <AppBar position="relative" color="primary">
      <Toolbar>
        <Typography
          variant="h5"
          noWrap
          color={"#D1D5D8"}
          sx={{ borderBottom: "2px solid", lineHeight: "20px", marginBottom: "-2px" }}
        >
          {albumKittiesTitle[0]}
        </Typography>
        <Typography variant="h5" noWrap color={"#D1D5D8"}>
          {albumKittiesTitle.slice(1)}
        </Typography>
        <ToastContainer />
      </Toolbar>
    </AppBar>
  );
}

export default Header;

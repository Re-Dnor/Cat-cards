import { AppBar, Toolbar, Typography } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  return (
    <AppBar position="relative" color="primary">
      <Toolbar>
      <Typography
        variant="h5"
        noWrap
        color={"#D1D5D8"}
        sx={{ borderBottom: "2px solid", lineHeight: "20px", marginBottom: "-2px" }}>
          A
      </Typography>
        <Typography variant="h5" noWrap color={"#D1D5D8"}>
          lbum kitties
        </Typography>
        <ToastContainer/>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
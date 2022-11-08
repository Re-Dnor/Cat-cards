import { createTheme, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Main from "./components/Main";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EF3124"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;

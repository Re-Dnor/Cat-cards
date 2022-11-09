import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ProviderRedux } from "react-redux";
import { ThemeProvider } from "@mui/material";
import store from "./store/store";
import "./index.css";
import App from "./App";
import useTheme from "./hooks/useTheme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const { theme } = useTheme();

root.render(
  <React.StrictMode>
    <ProviderRedux store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ProviderRedux>
  </React.StrictMode>
);

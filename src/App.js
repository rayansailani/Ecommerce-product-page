import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainPage from "./Components/MainPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff7d1a",
    },
  },
  typography: {
    fontFamily: ["Kumbh Sans", "sans-serif"].join(","),
  },
});


function App() {
  return (
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>
  );
}

export default App;

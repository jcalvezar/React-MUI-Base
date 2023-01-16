import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "./Header";
import Footer from "./Footer";

const theme = createTheme();

export default function Layout(props) {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}

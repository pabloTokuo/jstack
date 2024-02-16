import React, { useState, useMemo, useEffect, Component } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";

import themes from "./styles/themes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "dark",
    }
  }

  render() {
    const { theme } = this.state;

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout onToggleTheme={() => {
          this.setState(prevState => ({ theme: prevState.theme === "dark" ? "light" : "dark" }));
        }} selectedTheme={theme} />
      </ThemeProvider>
    );
  }
}

export default App;
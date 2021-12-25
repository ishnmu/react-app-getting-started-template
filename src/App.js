import * as React from "react";
import Home from "./components/Home";
import GlobalStyle from "./global.style";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Home />
    </React.Fragment>
  );
}

export default App;

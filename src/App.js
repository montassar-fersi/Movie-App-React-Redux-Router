import React from "react";
import MovieList from "./Component/MovieList";
import Search from "./Component/Search";
import { BrowserRouter, Route } from "react-router-dom";
import Description1 from "./Component/Description1";
import Description2 from "./Component/Description2";
import Description3 from "./Component/Description3";
import Description4 from "./Component/Description4";
import Description5 from "./Component/Description5";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <Search />
          <MovieList />
        </Route>
        <Route path="/CHARLIE ANGELS" component={Description1} />
        <Route path="/Barcelona" component={Description2} />
        <Route path="/Istanbul" component={Description3} />
        <Route path="/Rome" component={Description4} />
        <Route path="/Mexico" component={Description5} />
      </div>
    </BrowserRouter>
  );
}

export default App;

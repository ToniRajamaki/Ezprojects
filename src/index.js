import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Sum from "./add-sub";
import Bye from "./bye";
import Size from "./grow-shrink";
import Hide from "./hide";
import Align from "./align";
import CurTime from "./currentTime";
import Color from "./color";
import RandomColor from "./random-color";
import HexCounter from "./hex-counter";

import Navbar from "./navbar";

import Home from "./home";
import "./styles/styles.scss";

const Routes = {
  "/": () => <Home />,
  "/add-sub": () => <Sum />,
  "/bye": () => <Bye />,
  "/grow-shrink": () => <Size />,
  "/hide": () => <Hide />,
  "/align": () => <Align />,
  "/currentTime": () => <CurTime />,
  "/color": () => <Color />,
  "/random-color": () => <RandomColor />,
  "/hex-counter": () => <HexCounter />
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add-sub" component={Sum} />
            <Route path="/bye" component={Bye} />
            <Route path="/grow-shrink" component={Size} />
            <Route path="/hide" component={Hide} />
            <Route path="/align" component={Align} />
            <Route path="/currentTime" component={CurTime} />
            <Route path="/color" component={Color} />
            <Route path="/random-color" component={RandomColor} />
            <Route path="/hex-counter" component={HexCounter} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Routes;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

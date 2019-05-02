import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import ErrorPage from "./pages/404";
import Nav from "./components/Nav";

function App() {
    return(
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Books} />
                    <Route exact path="/saved" component={Saved} />
                    <Route component={ErrorPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  ContentDetail,
  CreateContent,
  Join,
  Redirect,
  NotFound,
} from "./route";
import { Navigation } from "./component";
import { useUserId } from "./hooks";
import "./scss/App.scss";

const App = () => {
  const { userId, handleUserId } = useUserId();

  return (
    <Router>
      <div className="App">
        <Navigation handleUserId={handleUserId} userId={userId} />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/join" render={() => <Join />} />
          <Route
            exact
            path="/content/:id"
            render={() => <ContentDetail userId={userId} />}
          />
          <Route path="/createcontent" render={() => <CreateContent />} />
          <Route path="/redirect" render={() => <Redirect />} />
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

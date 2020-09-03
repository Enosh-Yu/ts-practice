import React from "react";
import Greetings from "./Greetings";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact={true} path="/" component={Home} />
        <Route path="/greetings/:id" component={Greetings} />
      </Router>
    </ApolloProvider>
  );
};

export default App;

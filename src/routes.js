import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./hoc/layout";
// import HomePage from "./pages/home/home";
import ProductPage from "./pages/product/product";
 

const Routes = (props) => {
  return (
    <Layout user={props.user}>
      <Switch>
        <Route path="/" exact component={ProductPage} />
        <Route path="/products" exact component={ProductPage} />
      </Switch>
    </Layout>
  );
};

export default Routes;

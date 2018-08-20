import React from "react";
import Loadable from "react-loadable";

import DefaultLayout from "./containers/DefaultLayout";

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import("./views/Dashboard"),
  loading: Loading
});

const Cart = Loadable({
  loader: () => import("./views/Cart/Cart"),
  loading: Loading
});
const Checkout = Loadable({
  loader: () => import("./views/Checkout/Checkout"),
  loading: Loading
});
const Admin = Loadable({
  loader: () => import("./views/Admin/Admin"),
  loading: Loading
});

const routes = [
  { path: "/", exact: true, name: "Home", component: DefaultLayout },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/cart", exact: true, name: "Cart", component: Cart },
  { path: "/Checkout", exact: true, name: "Checkout", component: Checkout },
  { path: "/admin", exact: true, name: "Admin", component: Admin }
];

export default routes;

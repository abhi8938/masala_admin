/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Overview from "../views/Overview";
import Analytics from "../views/Analytics";
import Products from "../views/Products";
import Users from "../views/Users";
import Orders from "../views/Orders";
const dashboardRoutes = [
  {
    path: "/overview",
    name: "Overview",
    icon: "pe-7s-graph",
    component: Overview,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Users",
    icon: "pe-7s-user",
    component: Users,
    layout: "/admin"
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: "pe-7s-note2",
    component: Analytics,
    layout: "/admin"
  },
  {
    path: "/products",
    name: "Products",
    icon: "pe-7s-news-paper",
    component: Products,
    layout: "/admin"
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "pe-7s-news-paper",
    component: Orders,
    layout: "/admin"
  }
];

export default dashboardRoutes;

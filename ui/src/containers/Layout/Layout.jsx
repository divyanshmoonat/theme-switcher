import { useContext } from "react";
import { Layout } from "antd";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "../Login/Login";
import Home from "../Home/Home";
import ThemeConfig from "../ThemeConfig/ThemeConfig";

import "./Layout.css";
import { AuthContext } from "../../context/authContext";

const routes = [
  {
    path: "/",
    element: <Login />,
    private: false,
  },
  {
    path: "/home",
    element: <Home />,
    private: true,
  },
];

const AppLayout = () => {
  const { context } = useContext(AuthContext);

  const routerMiddleware = (route) =>
    route.private ? context.isAuthenticated : true;
  const routerConfig = createBrowserRouter(routes.filter(routerMiddleware));

  return (
    <ThemeConfig siteTheme={context.theme}>
      <Layout className="app-layout">
        <RouterProvider router={routerConfig} />
      </Layout>
    </ThemeConfig>
  );
};

export default AppLayout;

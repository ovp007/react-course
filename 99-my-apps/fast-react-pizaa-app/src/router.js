import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import Menu from "./features/menu/Menu";
import Card from "./features/card/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/card",
    element: <Card />,
  },
  {
    path: "/order/:orderId",
    element: <Order />,
  },
  {
    path: "/order/new",
    element: <CreateOrder />,
  },
]);

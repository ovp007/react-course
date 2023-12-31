// import { createBrowserRouter } from "react-router-dom";

// import Home from "./pages/Home";
// import Menu, { loader as menuLoader } from "./features/menu/Menu";
// import Cart from "./features/cart/Cart";
// import Order from "./features/order/Order";
// import CreateOrder from "./features/order/CreateOrder";
// import AppLayout from "./pages/AppLayout";
// import Error from "./ui/Error";

// export const router2 = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/menu",
//         element: <Menu />,
//         loader: menuLoader,
//       },
//       {
//         path: "/cart",
//         element: <Cart />,
//       },
//       {
//         path: "/order/:orderId",
//         element: <Order />,
//       },
//       {
//         path: "/order/new",
//         element: <CreateOrder />,
//       },
//     ],
//   },
// ]);

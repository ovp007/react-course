import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import StarRating from "./Rating/StarRating";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <App />
      </Suspense>
    ),
  },
  {
    path: "/aaa",
    element: (
      <Suspense>
        <StarRating color={"red"} />
      </Suspense>
    ),
  },
]);

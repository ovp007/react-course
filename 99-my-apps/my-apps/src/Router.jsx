import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <App />
      </Suspense>
    ),
  },
]);

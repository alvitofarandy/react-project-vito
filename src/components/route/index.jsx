import DetailMenuPage from "../../pages/DetailMenuPage";
import LandingPage from "../../pages/LandingPage";
import Login from "../../pages/Login";
import MenuPage from "../../pages/MenuPage";
import Register from "../../pages/Register";
import { ProtectedRoute } from "./ProtectedRoute";

export const route = [
  { path: "/", element: <LandingPage /> },
  {
    path: "menu-page",
    element: (
      <ProtectedRoute>
        <MenuPage />{" "}
      </ProtectedRoute>
    ),
  },
  {
    path: "menu-detail/:id",
    element: (
      <ProtectedRoute>
        <DetailMenuPage />
      </ProtectedRoute>
    ),
  },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
];

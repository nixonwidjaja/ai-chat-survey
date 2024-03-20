import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/admin/SignUp";
import Login from "./pages/admin/Login";
import AdminHome from "./pages/admin/AdminHome";
import AdminSurveyCreation from "./pages/admin/AdminSurveyCreation";
import Survey from "./pages/user/Survey";
import Chat from "./pages/user/Chat";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/admin",
    children: [
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
      {
        path: "survey",
        element: <AdminHome />,
        children: [
          {
            path: "create",
            element: <AdminSurveyCreation />,
          },
        ],
      },
    ],
  },
  { path: "/survey", element: <Survey /> },
  { path: "/chat", element: <Chat /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import HomePage from "./routes/homepage/homePage.jsx";

import Layout from "./routes/layout/layout.jsx";
import SinglePage from "./routes/singlePage/singlePage.jsx";
import NewPostPage from "./routes/newPostPage/newPostPage.jsx";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage.jsx";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProfilePage from "./routes/profilePage/profilePage.jsx";
import AboutPage from "./routes/aboutPage/aboutPage.jsx";
import ContactPage from "./routes/contactPage/contactPage.jsx";
import ListPage from "./routes/listpage/listPage.jsx";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path: "/profileUpdate",
          element: <ProfileUpdatePage />
        },
        {
          path: "/new",
          element: <NewPostPage />
        },
        {
          path: "/about",
          element: <AboutPage />
        },
        {
          path: "/contact",
          element: <ContactPage />
        },
      ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
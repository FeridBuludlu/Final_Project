import Detail from "../pages/site/Detail/Detail";
import Home from "../pages/site/Home/Home";
import Siteroot from "../pages/site/SiteRoot";
import Adminroot from "../pages/admin/AdminRoot";
import Add from "../pages/admin/Add/Add";
import Blog from "../pages/site/Blog/Blog";
import Contact from "../pages/site/Contact/Contact";
import Basket from "../pages/site/Basket/Basket";
import Wishlist from "../pages/site/Wishlist/Wishlist";
import Login from "../pages/site/login";
import Register from "../pages/site/register/register";
import ScrollToHead from "../components/ScrolltoHead";
const ROUTES = [
  {
    path: "/",
    element: (
      <ScrollToHead>
        <Siteroot />
      </ScrollToHead>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Adminroot />,
    children: [
      {
        path: "",
        element: <Add />,
      },
    ],
  },
];

export default ROUTES;

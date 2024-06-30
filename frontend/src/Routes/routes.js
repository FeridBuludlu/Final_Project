import Shop from "../pages/site/Shop/Shop";
import Detail from "../pages/site/Detail/Detail";
import Home from "../pages/site/Home/Home";
import Siteroot from "../pages/site/SiteRoot";
import Adminroot from "../pages/admin/AdminRoot"
import Add from "../pages/admin/Add/Add";
import Blog from "../pages/site/Blog/Blog"
import Contact from "../pages/site/Contact/Contact"
import About from "../pages/site/About/About"
import Basket from "../pages/site/Basket/Basket";
import Wishlist from "../pages/site/Wishlist/Wishlist";
import Login from "../pages/site/login";
import Register from "../pages/site/register/register";
const ROUTES = [
  {
    path: "/",
    element: <Siteroot/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "blog",
        element: <Blog/>,
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: 'basket',
        element: <Basket/>
      },
      {
        path: "wishlist",
        element: <Wishlist/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "register",
        element: <Register/>
      }
    ],
  },
  {
    path: "/admin",
    element: <Adminroot/>,
    children: [
      {
        path: "",
        element: <Add/>,
      },
    ],
  },
];

export default ROUTES;
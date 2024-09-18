import "./App.css";
import { useFetch } from "./hooks/useFetch";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import pages
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Signup from "./pages/signup/Signup";
import Wishlist from "./pages/wishlist/Wishlist";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Account from "./pages/account/Account";
import Error from "./pages/error/Error";
import Checkout from "./pages/checkout/Checkout";
import Details from "./pages/details/Details";

import MyProfile from "./components/myprofile/MyProfile";
import AddressBook from "./components/addressBook/AddressBook";
import MyPayment from "./components/mypayment/MyPayment";
import MyReturns from "./components/myreturns/MyReturns";
import MyCancellations from "./components/mycancellations/MyCancellations";
import AppLayout from "./layout/AppLayout";

// import context
import DataContext from "./context/DataContext";

function App() {
  const categoryData = useFetch("http://localhost:3000/categories");
  const bestProductsData = useFetch("http://localhost:3000/bestProducts");
  const flashSalesData = useFetch("http://localhost:3000/flashSales");
  const productsData = useFetch("http://localhost:3000/products");
  const wishlistData = useFetch("http://localhost:3000/wishlist");
  const recommendedData = useFetch("http://localhost:3000/recommended");
  const relatedData = useFetch("http://localhost:3000/reletedItems");

  const data = {
    categoryData,
    bestProductsData,
    flashSalesData,
    productsData,
    wishlistData,
    recommendedData,
    relatedData,
  };

  const routes = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error />,
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "wishlist",
          element: <Wishlist recommendedData={recommendedData} />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "details",
          element: <Details relatedData={relatedData} />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "account",
          element: <Account />,
          children: [
            {
              path: "profile",
              element: <MyProfile />,
            },
            {
              path: "addressbook",
              element: <AddressBook />,
            },
            {
              path: "payment",
              element: <MyPayment />,
            },
            {
              path: "returns",
              element: <MyReturns />,
            },
            {
              path: "cancellations",
              element: <MyCancellations />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <DataContext.Provider value={data}>
        <RouterProvider router={routes} />
      </DataContext.Provider>
    </div>
  );
}

export default App;

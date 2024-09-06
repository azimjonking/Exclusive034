import "./App.css";
import { useFetch } from "./hooks/useFetch";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

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

function App() {
  const categoryData = useFetch("http://localhost:3000/categories");
  const bestProductsData = useFetch("http://localhost:3000/bestProducts");
  const flashSalesData = useFetch("http://localhost:3000/flashSales");
  const productsData = useFetch("http://localhost:3000/products");
  const wishlistData = useFetch("http://localhost:3000/wishlist");
  const recommendedData = useFetch("http://localhost:3000/recommended");
  const relatedData = useFetch("http://localhost:3000/reletedItems");

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              flashSalesData={flashSalesData}
              categoryData={categoryData}
              bestProductsData={bestProductsData}
              productsData={productsData}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlistData={wishlistData}
              recommendedData={recommendedData}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />

        <Route
          path="/details"
          element={<Details relatedData={relatedData} />}
        />

        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account" element={<Account />}>
          <Route path="profile" element={<MyProfile />} />
          <Route path="addressbook" element={<AddressBook />} />
          <Route path="payment" element={<MyPayment />} />
          <Route path="returns" element={<MyReturns />} />
          <Route path="cancellations" element={<MyCancellations />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

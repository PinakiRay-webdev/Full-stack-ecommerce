import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Category from "./pages/Category/Category";
import Products from "./pages/Products/Products";
import Product from "./pages/Products/Product/Product";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import AppContext from "./utils/context";

const App = () => {
  const endPoints = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
    },
    {
      path: "/product/:id",
      element: <SingleProduct />,
    },
    {
      path: "/category/:id",
      element: <Category />,
    },
  ]);

  return (
    <>
      <AppContext>
        <Header />
        <RouterProvider router={endPoints}></RouterProvider>
        <Footer />
      </AppContext>
    </>
  );
};

export default App;

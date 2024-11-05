import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Deshboard from './Components/Deshboard/Deshboard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () => fetch('/data.json'),
        element: <Home></Home>
      },
      {
        path: "product/:product_id",
        loader: () => fetch('/data.json'),
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "deshboard",
        loader: () => fetch('/data.json'),
        element: <Deshboard></Deshboard>
      }
 
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

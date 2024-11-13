import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import Ststistics from './Ststistics';
import DashBord from './DashBord';
import ProductCart from './ProductCart';
import ProductDetails from './ProductDetails';


const fetchProducts = async () => {
  try {
    const response = await fetch('/productData.json');
    return await response.json();
  } catch (error) {
    console.error('Error fetching product data:', error);
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: async () => {
      const response = await fetch('/catagoryesData.json');
      return response.json();
    },
    children: [
      {
        path: '/',
        element: <ProductCart></ProductCart>,
        loader: fetchProducts
      },
      {
        path: '/category/:category',
        element: <ProductCart></ProductCart>,
        loader: fetchProducts,
      }
    ]
  },
  {
    path: '/ststistics',
    element: <Ststistics></Ststistics>,
    loader: () => fetch('productData.json')
  },
  {
    path: '/dashbord',
    element: <DashBord></DashBord>,
    // loader:()=>fetch('productData.json')

  },
  {
    path: '/product/:product_id',
    element: <ProductDetails></ProductDetails>,
    loader: () => fetch('productData.json')
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
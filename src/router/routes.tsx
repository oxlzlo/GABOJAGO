import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Payment from '@/pages/Payment';
import ProductDetail from '@/pages/ProductDetail';
import ShoppingBasket from '@/pages/ShoppingBasket';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';

export const routes = [
  {
    paht: '/',
    element: <Layout children />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/shopping-basket',
        element: <ShoppingBasket />,
      },
      {
        path: '/products-detail',
        element: <ProductDetail />,
      },
      {
        path: '/payment',
        element: <Payment />,
      },
    ],
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
];

import Home from '@/pages/Home';
import Payment from '@/pages/Payment';
import ProductDetail from '@/pages/ProductDetail';
import ShoppingBasket from '@/pages/ShoppingBasket';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/signin',
    element: <SignIn />,
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
];

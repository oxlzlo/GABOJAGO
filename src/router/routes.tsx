import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Payment from '@/pages/Payment';
import ProductDetail from '@/pages/ProductDetail';
import ShoppingBasket from '@/pages/ShoppingBasket';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';

export const routes = [
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: '/shopping-basket',
    element: (
      <Layout>
        <ShoppingBasket />,
      </Layout>
    ),
  },
  {
    path: '/products-detail',
    element: (
      <Layout>
        <ProductDetail />,
      </Layout>
    ),
  },
  {
    path: '/payment',
    element: (
      <Layout>
        <Payment />
      </Layout>
    ),
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

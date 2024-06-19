import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Payment from '@/pages/Payment';
import Cart from '@/pages/Cart';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import LodgmentItem from '@/pages/LodgmentItem';

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
        <Cart />
      </Layout>
    ),
  },
  {
    path: '/LodgmentItem:id',
    element: (
      <Layout>
        <LodgmentItem />
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
  {
    path: '/cart',
    element: <Cart />,
  },
];

import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Order from '@/pages/Order';
import Cart from '@/pages/Cart';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import AccommodationItem from '@/pages/AccommodationItem';
import FindId from '@/pages/FindId';
import Resetpw from '@/pages/Resetpw';
import OrderConfirm from '@/pages/OrderConfirm';
import OrderHistory from '@/pages/OrderHistory';

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
    path: '/cart',
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
  {
    path: '/accommodation/:accommodationId',
    element: (
      <Layout>
        <AccommodationItem />
      </Layout>
    ),
  },
  {
    path: '/order/:roomId',
    element: (
      <Layout>
        <Order />
      </Layout>
    ),
  },
  {
    path: '/order',
    element: (
      <Layout>
        <Order />
      </Layout>
    ),
  },
  {
    path: '/order/payment/:orderId',
    element: (
      <Layout>
        <OrderConfirm />
      </Layout>
    ),
  },
  {
    path: '/orderhistory',
    element: (
      <Layout>
        <OrderHistory />
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
    path: '/findid',
    element: <FindId />,
  },
  {
    path: '/resetpw',
    element: <Resetpw />,
  },
];

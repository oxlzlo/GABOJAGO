import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Order from '@/pages/Order';
import Cart from '@/pages/Cart';
import SignIn from '@/pages/SignIn';
import SignUp from '@/pages/SignUp';
import LodgmentItem from '@/pages/LodgmentItem';
import AccommodationItem from '@/pages/AccommodationItem';
import FindId from '@/pages/FindId';

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
    path: '/lodgment/:lodgmentId',
    element: (
      <Layout>
        <LodgmentItem />
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
    path: '/order/',
    element: (
      <Layout>
        <Order />
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
];

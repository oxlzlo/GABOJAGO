import Layout from '@/components/layout/Layout';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const Order = lazy(() => import('@/pages/Order'));
const Cart = lazy(() => import('@/pages/Cart'));
const SignIn = lazy(() => import('@/pages/SignIn'));
const SignUp = lazy(() => import('@/pages/SignUp'));
const AccommodationItem = lazy(() => import('@/pages/AccommodationItem'));
const FindId = lazy(() => import('@/pages/FindId'));
const Resetpw = lazy(() => import('@/pages/Resetpw'));
const Mypage = lazy(() => import('@/pages/Mypage'));
const OrderConfirm = lazy(() => import('@/pages/OrderConfirm'));
const OrderHistory = lazy(() => import('@/pages/OrderHistory'));

export const routes = [
  {
    path: '/',
    element: (
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </Layout>
    ),
  },
  {
    path: '/cart',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Cart />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: '/accommodation/:accommodationId',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <AccommodationItem />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: '/order/:roomId',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Order />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: '/order',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Order />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: '/order/payment/:orderId',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <OrderConfirm />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: '/orderhistory',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <OrderHistory />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: '/signup',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: '/signin',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SignIn />
      </Suspense>
    ),
  },
  {
    path: '/findid',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <FindId />
      </Suspense>
    ),
  },
  {
    path: '/resetpw',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Resetpw />
      </Suspense>
    ),
  },
  {
    path: 'mypage',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Mypage />
        </Layout>
      </Suspense>
    ),
  },
];

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from '@/router/routes';
import { AuthProvider } from './context/AuthContext';

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <AuthProvider>
        {' '}
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;

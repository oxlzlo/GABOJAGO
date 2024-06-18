import ChakraUiTest from '@/components/ChakraUiTest';
import LodgmentList from './components/LodgmentList';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from '@/router/routes';

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <div>Im app component</div>
      <ChakraUiTest />
      <LodgmentList />
    </>
  );
}

export default App;

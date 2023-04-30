import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import MasonryGrid from './components/MasonryGrid';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {path: '/', element: <HomePage /> },
      {path: '/Masonry', element: <MasonryGrid /> },
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

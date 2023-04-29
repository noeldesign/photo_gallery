import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import MasonryGrid from './components/MasonryGrid';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <RootLayout />,
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

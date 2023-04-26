import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import MasonryGrid from './components/MasonryGrid';

const router = createBrowserRouter([
  {path: '/', element: <HomePage /> },
  {path: '/Masonry', element: <MasonryGrid /> },
])

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App"></div>
    </RouterProvider>
  );
}

export default App;

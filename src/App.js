import "./App.css";
import StartGame from "./components/StartGame";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Game from './components/Game';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element:<StartGame/>
    },
    {
      path: '/game',
      element:<Game/>
    }
  ])
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default App;

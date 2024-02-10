import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Header, Home, Login, Detail} from './components';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/detail",
    element: <Detail/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {
  return (
      <div className="App">
        <Header />
        <RouterProvider router={router} />
        <Footer/>
      </div>
  
  )
}

export default App

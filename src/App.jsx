import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Detail from "./components/Detail"
import Header from "./components/Header"
import Home from "./components/Home"
import Login from "./components/Login";

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
    </div>
  )
}

export default App

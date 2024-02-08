import Detail from "./components/Detail"
import Header from "./components/Header"
import Home from "./components/Home"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/detail",
    element: <Detail/>,
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

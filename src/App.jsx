import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Header, Home, Login, Detail, ErrorBoundary} from './components';
import Footer from './components/Footer';





function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<ErrorBoundary/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

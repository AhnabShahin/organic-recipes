import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/home" element={<Home/>}></Route>
         <Route path= "*" element={<NotFound/>}></Route>
         <Route path="/footer" element={<Footer/>}></Route>
       </Routes>
      </Router>
    </div>
  );
}

export default App;

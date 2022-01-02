import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';



function App() {
  return (
    <div className="App">
     
     <Router>
     <Header></Header>
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/home" element={<Home/>}></Route>
        
         <Route path= "*" element={<NotFound/>}></Route>
         
       </Routes>
       <Footer></Footer>
      </Router>
   
    </div>
  );
}

export default App;

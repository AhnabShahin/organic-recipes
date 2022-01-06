import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import Login from './pages/Login/Login';
import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { googleJoin, removeUser, userLoading } from './redux/actions/actions';
import { Spinner } from 'react-bootstrap';
import Registration from './pages/Registration/Registration';
import AuthorDashboard from './pages/Author/AuthorDashboard/AuthorDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard/AdminDashboard';
import AuthorRoute from './pages/Author/AuthorRoute/AuthorRoute';
import HideRoute from './pages/HideRoute/HideRoute';



function App() {
  const auth = getAuth();
  const user = useSelector(state => state.user)
  console.log(user)
  const dispatch = useDispatch();
  // dispatch(userLoading());
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const data = { email: user.email }
        async function postUserData(data) {
          await axios.post('https://organic-recipes.herokuapp.com/user', data)
            .then((res) => {
              console.log(res.data)
              dispatch(googleJoin(res.data));
            })
        }
        postUserData(data)
      } else {
        dispatch(removeUser());
      }
    });
  }, [auth])
  if (user.loading) {
    return (
      <div className="d-flex my-5 justify-content-center">
        <Spinner animation="grow" variant="danger" />
      </div>
    );
  };
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<HideRoute><Login /></HideRoute>}></Route>
          <Route path="/registration" element={<HideRoute><Registration /></HideRoute>}></Route>
          <Route path="/author-dashboard/*" element={<AuthorRoute><AuthorDashboard /></AuthorRoute>}></Route>
          <Route path="/admin-dashboard/*" element={<AdminDashboard />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

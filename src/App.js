import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About';
import AllServices from './Pages/AllServices/AllServices';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Doctors from './Pages/Home/Doctors/Doctors';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Reviews from './Pages/Reviews/Reviews';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Signin from './Pages/Signin/Signin';
import SignUp from './Pages/SignUp/SignUp';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <PrivateRoute path="/allServices">
              <AllServices />
            </PrivateRoute>
            <Route path="/about">
              <About />
            </Route>
            <PrivateRoute path="/serviceDetail/:id">
              <ServiceDetail />
            </PrivateRoute>
            <Route path="/doctors">
              <Doctors />
            </Route>
            <Route path="/reviews">
              <Reviews />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
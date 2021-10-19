import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Service from './Pages/Service/Service';
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
            <Route path="/service">
              <Service />
            </Route>
            <Route path="/about">
              <About />
            </Route>

          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
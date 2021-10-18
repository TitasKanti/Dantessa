import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Signin from './Pages/Signin/Signin';
import SignOut from './Pages/SignOut/SignOut';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
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
          <Route path="/signOut">
            <SignOut />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

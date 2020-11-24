import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import BrowsePage from './pages/BrowsePage'
import AdminPanel from './pages/AdminPanel'
import WishlistPage from './pages/WishlistPage'
import LoginPage from './pages/LoginPage'
import ItemPage from './pages/ItemPage'
import NotFoundPage from './pages/NotFoundPage'
import RegisterPage from './pages/RegisterPage'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div id="page-body">
          <Switch>
            <Route path="/" component={BrowsePage} exact />
            <Route path='/admin' component={AdminPanel} />
            <Route path="/wishlist" component={WishlistPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/item/:itemName" component={ItemPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;

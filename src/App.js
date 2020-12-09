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
import LogoutPage from './pages/LogoutPage'
import { useEffect, useState } from 'react';
import axios from 'axios'
import config from './jwtconfig'

function App() {

  const [userType, setUserType] = useState('user')
  const [items, setItems] = useState([])

  const changeUserType = (newType) => {
    setUserType(newType)
  }

  const getItemNames = () => {
    axios.get('/api/items', config)
      .then((res) => {
        console.log(res.data)
        setItems(res.data)
        return res.data
      })
      .catch((err) => console.log(err))
  }
  useEffect(getItemNames, [])

  return (
    <Router>
      <div className="App">
        <Navbar userType={userType} />
        <div id="page-body">
          <Switch>
            <Route path="/" render={(props) => <BrowsePage items={items} />} exact />
            <Route path='/admin' render={(props) => <AdminPanel items={items} setItems={setItems} getItemNames={getItemNames} />} />
            <Route path="/wishlist" component={WishlistPage} />
            <Route path="/login" render={(props) => <LoginPage changeUserType={changeUserType} />} />
            <Route path="/logout" render={(props) => <LogoutPage changeUserType={changeUserType} />} />
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

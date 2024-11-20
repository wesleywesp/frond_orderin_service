import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/NavBar/Navbar';
import { ThemeProvider } from '@emotion/react';
import { dark } from '@mui/material/styles/createPalette';
import { darkTheme } from './component/Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import { CustomerRouter } from './Routers/CustomerRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './State/Authentication/Action';
import { store } from './State/Store';
import { findCart } from './State/Card/Action';
import { getAllRestaurantsAction } from './State/Restaurant/Action';
import { Routers } from './Routers/Routers';


function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector(store => store)
  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));

    dispatch(findCart(jwt))

  }, [auth.jwt])



  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers/>
    </ThemeProvider>
  );
}

export default App;

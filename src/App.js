import logo from './logo.svg';
import './App.css';
import { Navbar} from './component/NavBar/Navbar';
import { ThemeProvider } from '@emotion/react';
import { dark } from '@mui/material/styles/createPalette';
import { darkTheme } from './component/Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import { CustomerRouter } from './Routers/CustomerRoute';


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Navbar/>
      {/*<Home/>*/}
      {/*<RestaurantDetails/>*/}
      {/*<Cart/>*/}
      {/*<Profile/>*/}
      <CustomerRouter/>
    </ThemeProvider>
  );
}

export default App;

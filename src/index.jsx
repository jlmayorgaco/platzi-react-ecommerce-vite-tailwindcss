import { useRoutes, BrowserRouter } from 'react-router-dom';
import './App.css'

import Home from './Pages/HomePage'
import MyAccount from './Pages/MyAccountPage'
import MyOrder from './Pages/MyOrderPage'
import MyOrders from './Pages/MyOrdersPage'
import NotFound from './Pages/NotFoundPage'
import SignIn from './Pages/SignInPage'
import Navbar from "./Components/NavBar";
import Admin from "./Pages/AdminPage";
import Category from "./Pages/CategoryPage";
import SignUp from "./Pages/SignUpPage";
import SearchResult from "./Pages/SearchResultPage";
import { ShoppingCartProvider } from "./Context";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/all', element: <SearchResult/> },
    { path: '/category/:id', element: <Category/> },
    { path: '/my-account', element: <MyAccount/> },
    { path: '/my-order', element: <MyOrder/> },
    { path: '/my-orders', element: <MyOrders/> },
    { path: '/sign-in', element: <SignIn/> },
    { path: '/sign-up', element: <SignUp/> },
    { path: '/admin', element: <Admin/> },
    { path: '/*', element: <NotFound/> },
  ])
  return routes;
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
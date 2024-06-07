import { useContext } from "react";
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
  const activeStyle = 'underline underline-offset-4';
  const context = useContext(ShoppingCartContext);
  const cartCount = context.cart.length;

  const from_menu_to_li = (path, label, style) => (
    <li className={style} key={path}>
      <NavLink to={path} className={({ isActive }) => isActive ? activeStyle : undefined}>
        {label}
      </NavLink>
    </li>
  );

  const MENU_CATEGORIES = [
    { path: '/all', label: 'All', style: '' },
    { path: '/category/teas', label: 'Teas', style: '' },
    { path: '/category/coffees', label: 'Coffees', style: '' },
    { path: '/category/packs', label: 'Packs', style: '' },
    { path: '/category/accessories', label: 'Accessories', style: '' },
  ];

  const MENU_PROFILE = [
    { path: '/my-account', label: 'user@gmail.com', style: '' },
    { path: '/my-orders', label: 'My Orders', style: '' },
  ];

  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0'>
      <ul className='flex items-center gap-3'>
        <li className="font-semibold text-lg">
          <NavLink to='/'>Teaology</NavLink>
        </li>
        {MENU_CATEGORIES.map((item) => from_menu_to_li(item.path, item.label, item.style))}
      </ul>
      <ul className='flex items-center gap-3'>
        {MENU_PROFILE.map((item) => from_menu_to_li(item.path, item.label, item.style))}
        <li>
          <NavLink to='/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined}>
            Sign In
          </NavLink>
        </li>
        <li>🛒 { cartCount }</li>
      </ul>
    </nav>
  );
};

export default Navbar;

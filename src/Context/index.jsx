import { createContext, useEffect, useState } from 'react'

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const addToCart = (payload) => {
        const new_cart = [
            ...cart,
            ...[payload],
        ];
        setCart(new_cart);
        localStorage.setItem('E_COMNMERCE_V1_CART', JSON.stringify(new_cart));

    }

    useEffect(() => {
      const fetchData = async () => {
        try {

            const localCart = localStorage.getItem('E_COMNMERCE_V1_CART');
            if(localCart && JSON.parse(localCart)){
                setCart(JSON.parse(localCart))
            }
          const categoriesData = await window.$api.getAllCategories();
          const productsData = await window.$api.getAllProducts();
          setProducts(productsData);
          setCategories(categoriesData);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
      fetchData();
    }, []);

    return (
        <ShoppingCartContext.Provider value={{ 
          cart, setCart , addToCart,
          products, setProducts ,
          categories, setCategories
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}
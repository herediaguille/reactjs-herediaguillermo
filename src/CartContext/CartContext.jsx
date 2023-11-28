import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = () =>  useContext(CartContext)

export const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([])

    const addToCart = (newProduct) => {
        const ProductIndex = cartList.findIndex((product) => product.id === newProduct.id);
    
        if (ProductIndex !== -1) {
          const updatedCart = [...cartList];
          updatedCart[ProductIndex].cant += newProduct.cant;
          setCartList(updatedCart);
        } else {
          setCartList((prevCart) => [...prevCart, newProduct]);
        }
      }

    const totalQuantity = (cartList) => {
        return cartList.reduce((totalProduct, product) => totalProduct + product.cant, 0);
    }
     
    const removeProduct = (productId) => {
        const productToDelete = cartList.find((product) => product.id === productId);

        if (productToDelete) {
            if (productToDelete.cant > 1) {
                const updatedCart = cartList.map((product) =>
                    product.id === productId ? { ...product, cant: product.cant - 1 } : product
                );
                setCartList(updatedCart);
            } else {
                const updatedCart = cartList.filter((product) => product.id !== productId);
                setCartList(updatedCart);
            }
        }
    };

    const emptyCart = () => {
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeProduct,
            totalQuantity,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
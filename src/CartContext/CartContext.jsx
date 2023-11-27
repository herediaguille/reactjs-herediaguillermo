import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = () =>  useContext(CartContext)

export const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([])


    const agregarAlCarrito = (product) => {

        setCartList([
            ...cartList,
            product
        ])

    }

    const calcularTotalProductos = (cartList) => {
        return cartList.reduce((totalProductos, product) => totalProductos + product.cant, 0);
    }
     
    const eliminarProducto = (productId) => {
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

    const vaciarCarrito = () => {
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            eliminarProducto,
            calcularTotalProductos,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}
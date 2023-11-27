import { useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"

import { BsFillCartFill } from "react-icons/bs";

export const CartWidget = () => {

    const { cartList, calcularTotalProductos } = useContext(CartContext)
    
    return (
        <div>
            <span>{calcularTotalProductos(cartList)}</span>
            <BsFillCartFill />
        </div>
    )
}

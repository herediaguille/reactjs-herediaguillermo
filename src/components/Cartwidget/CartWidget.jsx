import { useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"

import { BsFillCartFill } from "react-icons/bs";

export const CartWidget = () => {

    const { cartList, totalQuantity } = useContext(CartContext)
    
    return (
        <div>
            <span>{totalQuantity(cartList) !== 0 && totalQuantity(cartList)}</span>
            <BsFillCartFill />
        </div>
    )
}

import { FormBuying } from "../FormBuying/FormBuying";
import { useContext, useState } from "react"
import { CartContext } from "../../CartContext/CartContext"

import { ItemCart } from "../ItemCart/ItemCart.Jsx";

export const CartContainer = () => {

    const [ isId, setIsId ] = useState('')

    const { cartList, emptyCart, removeProduct } = useContext(CartContext)

    const totalPrice = () => {
        return cartList.reduce((total, product) => total + product.price * product.cant, 0);
    }

    return (
        <>
            {isId !== '' && <h2>El Id de la compra es {isId} </h2>}
            { cartList.length === 0 && isId === '' ? 
                <>
                    <h2 className="text-center">No hay productos en el carrito</h2>
                </>
                :
                <div>
                    <div className="container"> 
                    {cartList.map(product => 
                    <div className="row">
                        <ItemCart/>
                    </div>
                    )}
                    {totalPrice() !== 0 && <p className="text-center">Precio total = ${totalPrice()}</p>}
                    </div>
                    <FormBuying totalPrice={totalPrice} />        
                </div>
            }
        </>
    )
}
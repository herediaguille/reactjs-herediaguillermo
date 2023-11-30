import { FormBuying } from "../FormBuying/FormBuying";
import { useContext, useState } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { ItemCart } from "../ItemCart/ItemCart";


export const CartContainer = () => {

    const [ isId, setIsId ] = useState('')

    const { cartList, emptyCart, removeProduct } = useContext(CartContext)

    const totalPrice = () => {
        return cartList.reduce((total, product) => total + product.price * product.cant, 0);
    }

    return (
        <>
            {isId !== '' && <h2 className="title-carrito">El Id de la compra es {isId} </h2>}
            { cartList.length === 0 && isId === '' ? 
                <>
                    <h2 className="text-center title-carrito">No hay productos en el carrito</h2>
                </>
                :
                <div>
                    <div className="container"> 
                    {cartList.map(product => 
                        <div className="row" key={product.id}>
                            <ItemCart product={product} removeProduct={removeProduct}/>
                        </div>
                    )}
                    {totalPrice() !== 0 && <h3 className="title-carrito price-total">Precio total = ${totalPrice()}</h3>}
                    </div>
                    <FormBuying totalPrice={totalPrice} />        
                </div>
            }
        </>
    )
}
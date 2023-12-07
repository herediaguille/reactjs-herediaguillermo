import { FormBuying } from "../FormBuying/FormBuying";
import { useContext, useState } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { ItemCart } from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";

export const CartContainer = () => {

    const [ isId, setIsId ] = useState('')

    const { cartList, emptyCart, removeProduct } = useContext(CartContext)

    const totalPrice = () => {
        return cartList.reduce((total, product) => total + product.price * product.cant, 0);
    }
    
    return (
        <>
            {isId !== '' ? (
                <h2 className="text-center title-cart">El Id de la compra es {isId}</h2>
            ) : cartList.length === 0 ? (
                <div>
                    <h2 className="text-center title-cart">No hay productos en el carrito</h2>
                    <Link to="/" className="d-grid gap-2 col-4 mx-auto">
                        <button className='btn btn-warning btn--buy m-2'>Seguir Comprando</button>
                    </Link>
                </div>
            ) : (
                <div>
                    <div className="container"> 
                        {cartList.map(product => 
                            <div className="row" key={product.id}>
                                <ItemCart product={product} removeProduct={removeProduct}/>
                            </div>
                        )}
                        {totalPrice() !== 0 && <h3 className="title-cart price-total">Precio total = ${totalPrice()}</h3>}
                    </div>
                    <FormBuying setIsId={setIsId} totalPrice={totalPrice} />
                </div>
            )}
        </>
    )
}
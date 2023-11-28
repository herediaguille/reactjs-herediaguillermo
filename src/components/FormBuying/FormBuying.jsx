import { useContext, useState } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore";

export function FormBuying ({ totalPrice }) {
    const [ isId, setIsId ] = useState('')
    const [ formData, setformData ] = useState({
        name: '',
        phone: '',
        email: '',
        adress: ''
    })
    const { cartList, emptyCart, removeProduct } = useContext(CartContext)
    const getOrder = (evt) => {
        evt.preventDefault()
        const order = {}
        order.buyer = formData
        order.items = cartList.map( product => ( { id: product.id, price: product.price, title: product.title, cant: product.cant} ) )
        order.total = totalPrice()        
        
        const db = getFirestore()
        const queryCollection = collection (db, 'orders')

        addDoc(queryCollection, order)
        .then (({id}) => console.log(id))
        .catch (error => console.log(error))
        .finally (()=> {
            setformData({
                name: '',
                phone: '',
                email: '',
                adress: ''
            })
            emptyCart()
        })
    }
    const handleOnChange = (evt) => {
        setformData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }
    return (
        <>
            <form className="text-center" onSubmit={getOrder}>
                <label>Ingresar nombre</label><br />
                <input type="text" name="name" required onChange={handleOnChange} value={formData.name}/><br />
                <label>Ingresar Telefono</label><br />
                <input type="text" name="phone" required onChange={handleOnChange} value={formData.phone}/><br />
                <label>Ingresar Email</label><br />
                <input type="text" name="email" required onChange={handleOnChange} value={formData.email}/><br />
                <label>Ingresar Direccion</label><br />
                <input type="text" name="adress" required onChange={handleOnChange} value={formData.adress}/><br />
                <button className="btn btn-outline-dark" onClick={getOrder}>Realizar pedido</button>
                <button className="btn btn-outline-danger" onClick={emptyCart}>Vaciar Carrito</button>
            </form>
        </>
    )
}

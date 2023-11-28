import { useContext, useState } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



export const CartContainer = () => {

    const [ isId, setIsId ] = useState('')
    const [ formData, setformData ] = useState({
        name: '',
        phone: '',
        email: '',
        adress: ''
    })

    const { cartList, emptyCart, removeProduct } = useContext(CartContext)

    const totalPrice = () => {
        return cartList.reduce((total, product) => total + product.price * product.cant, 0);
    }

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
            {isId !== '' && <h2>El Id de la compra es {isId} </h2>}
            { cartList.length === 0 ? 
                <>
                    <h2 className="text-center">No hay productos en el carrito</h2>
                </>
                :
                <div>
                    <div className="container"> 
                    {cartList.map(product => 
                    <div className="row">
                    <div className="col-lg-3 col-md-6" >
                        <Card>
                            <Card.Img variant="top" src={product.img} alt={product.title} className="rounded d-block"/>
                        </Card> 
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <Card  >
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Precio: ${product.price} - Cantidad: {product.cant}   
                                    <button className="btn btn-danger" onClick={() => removeProduct(product.id)}>X</button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card> 
                    </div>
                    </div>
                    )}
                    {totalPrice() !== 0 && <p className="text-center">Precio total = ${totalPrice()}</p>}
                    </div>
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
                </div>
            }
        </>
    )
}
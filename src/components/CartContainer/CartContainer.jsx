import { useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



export const CartContainer = () => {

    const {cartList, emptyCart, removeProduct} = useContext(CartContext)

    const totalPrice = () => {
        return cartList.reduce((total, product) => total + product.price * product.cant, 0);
    }

    const getOrder = () => {
        const order = {}
        order.buyer = {nombre: 'guille', phone: '3513874444', email: 'heredia.guille@gmail.com'}
        order.items = cartList.map( product => ( { id: product.id, price: product.price, title: product.title, cant: product.cant} ) )
        order.total = totalPrice()        
        
        const db = getFirestore()
        const queryCollection = collection (db, 'orders')

        addDoc(queryCollection, order)
        .then (res => console.log(res))
        .catch (error => console.log(error))
    }

    return (
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
            <p>Precio total = ${totalPrice()}</p>
            <button className="btn btn-outline-danger" onClick={emptyCart}>Vaciar Carrito</button>
            <button className="btn btn-outline-dark" onClick={getOrder}>Realizar pedido</button>
            </div>
        </div>
    )
}
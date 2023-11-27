import { useContext } from "react"
import { CartContext } from "../../CartContext/CartContext"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



export const CartContainer = () => {

    const {cartList, vaciarCarrito, eliminarProducto} = useContext(CartContext)

    const handleEliminarClick = (productId) => {
        eliminarProducto(productId);
    }

    const totalPrice = () => {
        return cartList.reduce((total, product) => total + product.price * product.cant, 0);
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
                            <button className="btn btn-danger" onClick={() => handleEliminarClick(product.id)}>X</button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card> 
            </div>
            </div>
            )}
            <p>Precio total = ${totalPrice()}</p>
            <button className="btn btn-outline-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
            <button className="btn btn-outline-dark" >Realizar pedido</button>
            </div>
        </div>
    )
}
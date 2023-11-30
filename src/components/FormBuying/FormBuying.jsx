import { useContext, useState } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

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
            <Form className="container">
                <Form.Group className="mb-3 title-carrito" controlId="">
                    <Form.Label>Ingresar Nombre</Form.Label>
                    <Form.Control type="text" name="name" required onChange={handleOnChange} value={formData.name} />
                </Form.Group>

                <Form.Group className="mb-3 title-carrito" controlId="">
                    <Form.Label>Ingresar Telefono</Form.Label>
                    <Form.Control type="text" name="phone" required onChange={handleOnChange} value={formData.phone} />
                </Form.Group>

                <Form.Group className="mb-3 title-carrito" controlId="">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" required onChange={handleOnChange} value={formData.email} />
                </Form.Group>

                <Form.Group className="mb-3 title-carrito" controlId="">
                    <Form.Label>Ingresar Dirección</Form.Label>
                    <Form.Control type="text" name="adress" required onChange={handleOnChange} value={formData.adress} />
                </Form.Group>

                <Button className="btn btn-success" onClick={getOrder} type="submit">
                    Realizar pedido
                </Button>
                <Button className="btn btn-danger" onClick={emptyCart} type="submit">
                    Vaciar Carrito
                </Button>
            </Form>
        </>
    )
}

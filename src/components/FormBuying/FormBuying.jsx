import { useContext, useState } from "react"
import { CartContext } from "../../CartContext/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export function FormBuying ({ totalPrice, setIsId  }) {

    const [ formData, setformData ] = useState({
        name: '',
        phone: '',
        email: '',
        adress: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        email: '',
        adress: ''
    })
    const validateForm = () => {
        let isValid = true
        const newErrors = { ...errors }

    const validateField = (fieldName, errorMessage) => {
        
        if (formData[fieldName].trim() === '') {
            newErrors[fieldName] = errorMessage;
            isValid = false;
        } else {
            newErrors[fieldName] = '';
        }
    }

    validateField('name', 'Campo obligatorio');
    validateField('phone', 'Campo obligatorio');
    validateField('email', 'Campo obligatorio');
    validateField('adress', 'Campo obligatorio');

    setErrors(newErrors)
    return isValid
    }

    const { cartList, emptyCart, removeProduct } = useContext(CartContext)

    const getOrder = (evt) => {
        evt.preventDefault()

        if (!validateForm()) {
            return
        }

        const order = {}
        order.buyer = formData
        order.items = cartList.map( product => ( { id: product.id, price: product.price, title: product.title, cant: product.cant} ) )
        order.total = totalPrice()        
        
        const db = getFirestore()
        const queryCollection = collection (db, 'orders')

        addDoc(queryCollection, order)
        .then (({id}) => setIsId(id))
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
                <Form.Group className="mb-3 title-cart" controlId="">
                    <Form.Label>Ingresar Nombre</Form.Label>
                    <Form.Control type="text" name="name" required onChange={handleOnChange} value={formData.name} />
                    <Form.Text className="text-danger">{errors.name}</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 title-cart" controlId="">
                    <Form.Label>Ingresar Telefono</Form.Label>
                    <Form.Control type="text" name="phone" required onChange={handleOnChange} value={formData.phone} />
                    <Form.Text className="text-danger">{errors.phone}</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 title-cart" controlId="">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" required onChange={handleOnChange} value={formData.email} />
                    <Form.Text className="text-danger">{errors.email}</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 title-cart" controlId="">
                    <Form.Label>Ingresar Dirección</Form.Label>
                    <Form.Control type="text" name="adress" required onChange={handleOnChange} value={formData.adress} />
                    <Form.Text className="text-danger">{errors.adress}</Form.Text>
                </Form.Group>
                
                <div className="d-grid gap-2 col-4 mx-auto">
                    <Button className="btn btn-success" onClick={getOrder} type="submit">
                        Realizar pedido
                    </Button>
                    <Button className="btn btn-danger" onClick={emptyCart} type="submit">
                        Vaciar Carrito
                    </Button>
                </div>
            </Form>
        </>
    )
}

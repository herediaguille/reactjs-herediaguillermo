import { useContext, useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"

import { mfetch } from "../../helpers/mFetch"
import { ItemCounter } from "../ItemCounter/ItemCounter"
import { Link, useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CartContext } from "../../CartContext/CartContext"

export const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState ([])
    const { pid } = useParams()
    
    const {agregarAlCarrito, cartList} = useContext (CartContext)
    
    const onAdd = cant => {
        agregarAlCarrito({ ...product, cant })
    }
    console.log(cartList)
    
    useEffect(()=>{
        const dbFirestore = getFirestore()
        const queryDoc = doc(dbFirestore, 'products', pid) 
        getDoc(queryDoc)
        .then(res => setProduct( { id: res.id , ...res.data() } ))
        .catch(err => console.log(err))
    },[])
    return (
        <div className="container">
            <div className="row"> 
            <div className="col-lg-3 col-md-6">
                <Card>
                    <Card.Img variant="top" src={product.img} alt={product.title} className="rounded d-block"/>
                </Card> 
            </div>
            <div className="col-lg-6 col-md-6">
                <Card key={product.id} >
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                    <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
                    </ListGroup>
                    <ItemCounter onAdd={onAdd}/>
                </Card> 
            </div>
            </div>
        </div>
    )
}


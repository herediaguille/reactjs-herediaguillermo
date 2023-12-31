import { useContext, useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"

import { ItemCounter } from "../ItemCounter/ItemCounter"
import { Link, useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CartContext } from "../../CartContext/CartContext"
import { Loading } from "../Loading/Loading";

export const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState ([])
    const [ loading, setLoading ] = useState(true)
    const { pid } = useParams()
    
    const {addToCart, cartList} = useContext (CartContext)
    
    const onAdd = cant => {
        addToCart({ ...product, cant })
    }
    
    useEffect(()=>{
        const dbFirestore = getFirestore()
        const queryDoc = doc(dbFirestore, 'products', pid) 
        getDoc(queryDoc)
        .then(res => setProduct( { id: res.id , ...res.data() } ))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    },[])
    return (
        <>
            {loading ? 
            <Loading/>
            :
            <div className="container">
                <div className="row"> 
                    <div className="col-lg-3 col-md-6">
                        <Card className="card-styles">
                            <Card.Img variant="top" src={product.img} alt={product.title} className="rounded d-block"/>
                        </Card> 
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <Card key={product.id} className="card-styles">
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text className="card-detail">
                                    {product.description}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                            <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
                            </ListGroup>
                            <ItemCounter onAdd={onAdd}/>
                        </Card> 
                    </div>
                    <Link to="/" className="d-grid gap-2 col-6 mx-auto">
                        <button className='btn btn-warning btn--buy m-2'>Seguir Comprando</button>
                    </Link>
                </div>
            </div>
            }
        </>
    )
}


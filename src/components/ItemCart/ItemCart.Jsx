import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export function ItemCart ({ product, removeProduct }) {

    return (
        <>
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
        </>
    )
}
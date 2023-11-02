import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export function Item ({ product }) {
    return (
    <>  
        <div className="col-lg-3 col-md-6">
        <Card key={product.id} >
          <Card.Img variant="top" src={product.img} alt={product.title} className="rounded d-block"/>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
                {product.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
                <Link to={`/detail/${product.id}`}>
                    <button className="btn btn-outline-dark w-100">Detalle</button>
                </Link>
          </Card.Body>
        </Card> 
        </div>
    </>
    )
}

//<>    
//<div className="card w-25" key={product.id}>
//    <img src={product.img} alt={product.title} />
//    <div>
//        <p>{product.title}</p>
//        <p>Precio: ${product.price}</p>
//        <p>{product.description}</p>
//    </div>
//    <div className="card-footer">
//
//        <Link to={`/detail/${product.id}`}>
//            <button className="btn btn-outline-dark w-100">Detalle</button>
//        </Link>
//    </div>
//</div>
//</>
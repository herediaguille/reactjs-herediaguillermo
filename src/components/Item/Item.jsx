export function Item ({ product }) {
    return (
    <>    
        <div className="card w-25" key={product.id}>
            <img src={product.img} alt={product.title} />
            <div>
                <p>{product.title}</p>
                <p>Precio: ${product.price}</p>
                <p>{product.description}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-dark w-100">Detalle</button>
            </div>
        </div>
    </>
    )
}

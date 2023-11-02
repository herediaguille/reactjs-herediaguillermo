import { Item } from "../Item/Item";

export function ItemList({ products }) {
    return (
      <>
        <div className="container">
            <div className="row">
                    {products.map(product => (<Item product={product} key={product.id} />))}
            </div>
        </div>
      </>
    )
  }
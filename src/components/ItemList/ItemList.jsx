import { Item } from "../Item/Item";

export function ItemList({ products }) {
    return (
      <>
        {products.map(product => (
            <Item product={product} key={product.id} />        ))}
      </>
    )
  }
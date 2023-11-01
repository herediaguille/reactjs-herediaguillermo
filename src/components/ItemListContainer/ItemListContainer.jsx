import { useEffect, useState } from "react"
import { mfetch } from "../../helpers/mFetch"
import { ItemList } from "../ItemList/ItemList"

function ItemListContainer({greeting = 'Saludos'}) {
    const [ products, setProducts ] = useState ([])
    useEffect(()=> {
        mfetch()
        .then(resultado => setProducts(resultado))
        .catch(error => console.log(error))
        .finally(()=> console.log('error capturado'))
    }, [])
    return (
        <>
            <div>
                {greeting}
            </div>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer
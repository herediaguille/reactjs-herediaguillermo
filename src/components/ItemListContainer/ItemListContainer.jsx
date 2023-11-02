import { useEffect, useState } from "react"
import { mfetch } from "../../helpers/mFetch"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

function ItemListContainer({greeting = 'Saludos'}) {
    const [ products, setProducts ] = useState ([])
    const { cid } = useParams()
    console.log(cid)

    useEffect(()=> {
        if (cid) {
            mfetch()
            .then(resultado => setProducts(resultado.filter((product) => product.category === cid)))
            .catch(error => console.log(error))
            .finally(()=> console.log('error capturado'))
        }else{
            mfetch()
            .then(resultado => setProducts(resultado))
            .catch(error => console.log(error))
            .finally(()=> console.log('error capturado'))
        }
    }, [cid])
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
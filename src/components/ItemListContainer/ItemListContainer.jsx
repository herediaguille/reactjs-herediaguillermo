import { useEffect, useState } from "react"
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'

import { ItemList } from "../ItemList/ItemList"

import { useParams } from "react-router-dom"


function ItemListContainer({ greeting = 'saludos' }) {
    const [ products, setProducts ] = useState([])
    const [ loading, setLoading ]   = useState(true)

    const { cid } = useParams()
    
    useEffect(()=>{
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'products') 
        
        const queryFilter = cid ? query(queryCollection, where('category', '==', cid)) : queryCollection
                
        getDocs(queryFilter)
        .then(res =>{ setProducts( res.docs.map(product => ({ id: product.id , ...product.data() }) ) )})
        .catch(error => console.log(error)) 
        
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
import { useEffect, useState } from "react"
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'

import { mfetch } from "../../helpers/mFetch"
import { ItemList } from "../ItemList/ItemList"

import { useParams } from "react-router-dom"


function ItemListContainer({ greeting = 'saludos' }) {
    const [ products, setProducts ] = useState([])
    const [ product, setProduct ] = useState({})
    const [ loading, setLoading ]   = useState(true)
    const [ like, setLike ]   = useState(false)

    const { cid } = useParams()
    
    useEffect(()=>{
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'products') 
        
        if (cid) {
            const queryFilter = query(queryCollection, where('category', '==', cid))
                
            getDocs(queryFilter)
            .then(res =>{ setProducts( res.docs.map(product => ({ id: product.id , ...product.data() }) ) )})
            .catch(error => console.log(error)) 
            
        }else{
                       
            getDocs(queryCollection)
            .then(res => setProducts( res.docs.map(product => ({ id: product.id , ...product.data() }) ) ))
            .catch(error => console.log(error)) 
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
const products = [
    {id: 1, title: 'Producto 1', category: 'Hamburguesa', price: 2500, stock: 13, img: '../../public/assets/burger.jpg', description: 'descripcion del produrcto'},
    {id: 2, title: 'Producto 2', category: 'Hamburguesa', price: 2500, stock: 13, img: '../../public/assets/burger.jpg', description: 'descripcion del produrcto'},
    {id: 3, title: 'Producto 3', category: 'Hamburguesa', price: 2500, stock: 43, img: '../../public/assets/burger.jpg', description: 'descripcion del produrcto'},
    {id: 4, title: 'Producto 4', category: 'Hamburguesa', price: 2500, stock: 13, img: '../../public/assets/burger.jpg', description: 'descripcion del produrcto'},
    {id: 5, title: 'Producto 5', category: 'Hamburguesa', price: 2500, stock: 7, img: '../../public/assets/burger.jpg', description: 'descripcion del produrcto'}
]
export const mfetch = () =>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(products)
        }, 2000)
    })
}
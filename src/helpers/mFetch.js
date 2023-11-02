const products = [
    {id: '1', title: 'Doble Black', category: 'hamburguesas', price: 2500, stock: 13, img: '../../public/assets/doubleblack.jpg', description: 'Doble medallón de carne 80grs, doble queso cheddar, cebolla crispy, pepinillos agridulces, salsa BBQ y salsa Black Pan en pan de papa tipo Brioche.'},
    {id: '2', title: 'Combo Lady', category: 'combos', price: 2500, stock: 13, img: '../../public/assets/combolady.jpg', description: 'Medallón de carne 80grs, lechuga, tomate y salsa Black Pan en pan de papa tipo Brioche acompañada de papas fritas y bebida.'},
    {id: '3', title: 'Triple bacon', category: 'hamburguesas', price: 3500, stock: 43, img: '../../public/assets/triplebacon.jpg', description: 'Triple medallón de carne 80grs, triple queso cheddar, panceta ahumada y salsa Black Pan en pan de papa tipo Brioche.'},
    {id: '4', title: 'Combo Florida', category: 'combos', price: 2500, stock: 13, img: '../../public/assets/comboflorida.jpg', description: 'Pechuga de pollo rebozada con cereales, lechuga y mayonesa láctea de limón en pan de papa tipo Brioche acompañada de papas fritas y bebida.'},
    {id: '5', title: 'Cheese Burger', category: 'hamburguesas', price: 2500, stock: 7, img: '../../public/assets/cheeseburger.jpg', description: 'Medallón de carne 120grs, queso cheddar y salsa Black Pan en pan de papa tipo Brioche.'},
    {id: '6', title: 'Limonada', category: 'bebidas', price: 2500, stock: 7, img: '../../public/assets/limonada.jpg', description: 'Limón, azucar, jengibre y menta.'},
    {id: '7', title: 'Licuado', category: 'bebidas', price: 2500, stock: 7, img: '../../public/assets/licuado.jpg', description: 'Licuado de Banana, durazno o frutilla'}
]
export const mfetch = (id) =>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(id ? products.find(product => product.id === id) : products)
        }, 2000)
    })
}
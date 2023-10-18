// TODO 1 - Importar productos
import products from './products.json'; 

//TODO 2.1 - Filtrar utilizando
const filterSmartphones = (products) => {
	return products.filter(product => product.category === "smartphones");
}

//TODO 3.1 - Usar template literals
const returnProductName = (products) => {
	return (products.map(smartphone => `${smartphone.brand} - ${smartphone.title}`));
}

const calcTotalPrice = (products) => {
	return products.reduce((total,smartphone) => total + smartphone.price, 0);
}
const calcQuantity = (products) => {
	return products.length;
}
export default function Practica1 () {
    // TODO 2 - Filtrar productos donde sean "category" igual a "smartphone"
	let smartphones = filterSmartphones(products);
    // TODO 3 - Armar un arreglo de nombres de productos con "marca" y "nombre". 
    let nameArray = returnProductName(smartphones);
    // TODO 4 - Calcular el precio total de los teléfonos filtrados
    let total = calcTotalPrice(smartphones);
    // TODO 5 - Calcular la cantidad de productos
    let quantity = calcQuantity(smartphones);
   // console.log(nameArray);
    if (!Array.isArray(nameArray)) {
        nameArray = [];
    }
    return (
        <div className='contenedor'>
            <p>Productos de smartphones son { quantity } por un total de $ { total } </p>
            <ul>
                { nameArray.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
} 
























/*
export default function Practica1() {
    console.log('productos', products);
    console.log('Productos Smartphone', filterSmartphones);
    console.log('Lista de nombres y titulos', returnProductName);
    console.log('calTotal', calcTotalPrice);
    console.log('Cantidad de productos', calcQuantity);

    if (!Array.isArray(nameArray)) {
        nameArray = [];
    }

    return (
        <div>
            <p>Productos de smartphones son {calcQuantity} por un total de $ {calcTotalPrice} </p>
            <ul>
                {returnProductName.map((item, index) => (
                    <li key={index}>{item.nombre} - {item.marca}</li>
                ))}
            </ul>
        </div>
    );
}
*/

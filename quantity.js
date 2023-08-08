const shopingCart = [
    {name: 'shoe', price: 1200, quanty:2},
    {name: 'shirt', price: 2200, quanty:3},
    {name: 'pant', price: 2000, quanty:2},
    {name: 'belt', price: 200, quanty:7},
    {name: 'watch', price: 3200, quanty:5},
]
function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal =product.price * product.quanty;
        
        sum = sum + productTotal;
       
    }
    return sum;
}

const expence = totalCost(shopingCart);
console.log('total expence today:', expence)
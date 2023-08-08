const shopingCart = [
    {name: 'shoe', price: 1200},
    {name: 'shirt', price: 2200},
    {name: 'pant', price: 2000},
    {name: 'belt', price: 200},
    {name: 'watch', price: 3200},
]

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        
        sum = sum + product.price;
       
    }
    return sum;
}

const expence = totalCost(shopingCart);
console.log('total expence today:', expence)
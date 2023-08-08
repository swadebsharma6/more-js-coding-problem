const phones =[
    {name:'Samsung', camera:12, storage:'32gb', price: 36000, color:'silver'},
    {name:'Vivo', camera:12, storage:'32gb', price: 22000, color:'silver'},
    {name:'Walton', camera:12, storage:'32gb', price: 86000, color:'silver'},
    {name:'symphony', camera:12, storage:'32gb', price: 6000, color:'silver'},
    {name:'Nokia', camera:12, storage:'32gb', price: 44000, color:'silver'},
    {name:'HTC', camera:12, storage:'32gb', price: 62000, color:'silver'},
]

function chepestphone (phones){
    let chepest = phones[0];

    for(let i = 0; i < phones.length; i++ ){
        const phone = phones[i];
        // console.log(phone)

        if(phone.price < chepest.price){
            chepest = phone;
        }
    }

    return chepest;
}

const myselection = chepestphone(phones);
console.log('my selection:', myselection)
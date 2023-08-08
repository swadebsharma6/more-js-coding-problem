const names = ['abul', 'babul', 'cabul','dabul','ebul', 'babul', 'abul', 'kabul','cabul', 'abul', 'babul', 'dabul' ];


function removeDuplicate (names){
    let unique = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        // console.log(name)
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }

    return unique;
}

const uniqueName = removeDuplicate(names);
console.log(uniqueName)
const friends =[12, 34, 54, 34, 67, 75, 78, 12, 45, 43];

const partial = friends.slice(2, 6);
console.log(partial);
console.log(friends);

// Splice
const friends1 =[12, 34, 54, 34, 67, 75, 78, 12, 45, 43];

const partial1 = friends1.splice(2, 5, 100, 555, 777)
console.log(partial1)
console.log(friends1)
function reverseArray(arrayOfItems = []){ 
    const newArray = []
    arrayOfItems.map(item =>{
        newArray.unshift(item); 
    })
    return newArray;
}

const users = ["Daniel","Jose","Juan","Marco"]; 

const usersReverse = reverseArray(users) ;

console.log(users);
console.log(usersReverse);
function getMaxNumber(arreglo = []){ 
    const max = arreglo.reduce(function (a, b) {
        return (a > b) ? a : b
    });
    return max;     
}

test = [1,2,6,10,6,3,2]
console.log(getMaxNumber(test));
function isValid(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char in pairs) { 
            // Si es un cierre, verifica si coincide con el último en la pila
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        } else {
            // Si es un paréntesis de apertura, agrégalo a la pila
            stack.push(char);
        }
    }

    return stack.length === 0; // La pila debe quedar vacía si es válido
}

// Ejemplos de uso
console.log(isValid("()"));       // true
console.log(isValid("()[]{}"));   // true
console.log(isValid("(]"));       // false
console.log(isValid("{[()]}"));   // true
console.log(isValid("([)]"));     // false
console.log(isValid("]"));        // false
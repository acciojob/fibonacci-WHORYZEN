function fibonacci(num) {
    if (num === 0) return 0; // Base case: Fibonacci(0) is 0
    if (num === 1) return 0; // Base case: Fibonacci(1) is 1
    
    let a = 0;
    let b = 1;
    let result = 0;
    
    for (let i = 2; i <= num; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    
    return result;
}

module.exports = fibonacci;

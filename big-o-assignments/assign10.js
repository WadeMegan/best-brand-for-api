function isWhat(n) {
    
    if(){} //take out, just there for error

    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

console.log(isWhat())

//dont quite understand what this function is actually doing

/* If the number is less than two OR is not an integer (n%1 != 0), then it returns false. Else, it performs a loop for 2-n and if the number is divisible by i, it returns false. Otherwise, returns true.*/

/* not sure if what the big o is here */ 

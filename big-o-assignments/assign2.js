
function isEven(value) {
    if (value % 2 == 0) {
        return true; 
    } 
    else {
        return false; 
    }
}

/* This is constant time because regardless of how big the inputted value is, it will always take the same amount of time to finish, since it is just checking if the value is odd or even. */

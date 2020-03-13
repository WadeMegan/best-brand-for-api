function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/* This function is constant time. This is because regardless of the size of the input, it will always take the same amount of time to complete. This function is just taking the length of the array and multiplying it by a random number and then rounding down that number, which is a basic arithmetic function */ 

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

/* This is polynomial time because the running time is the input size raised to the power 2, for 2 for loops. For each value in the array, the function is going to iterate AGAIN. */
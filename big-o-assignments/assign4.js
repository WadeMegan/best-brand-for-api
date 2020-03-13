function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

/* This is linear time because the running time will be directly proportional to the size of the array. This is because it is just looping through the array and for each number in the array, it is doubling it, which is simple arithmetic. Each doubling will take the same amount of time. */
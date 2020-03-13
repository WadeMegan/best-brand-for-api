function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

/* This is also linear time, for the same reason that question 4 was linear also. It is simply going through each value in the array and checking if it matches the item. Checking if it matches will only take x amount of time each time, so for each extra value in the array, time will just increase by x. */
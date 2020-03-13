
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

/* this is polynomial time because the running size is going to be relational to the input size raised to the constant power 2. This is because there are 2 for loops, which will iterate over each of the arrays. */
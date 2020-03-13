function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

/* This function loops from 1-num. For the first loop, when i=1, it pushes 0 onto the results array. For the second loop, when i=2, it pushes 1 onto the results array. For all other loops, it adds the value of result[i-2] and the value of result[i-3], and pushes it onto the result. */

/* This function is linear time because the running time is directly proportional to the size of the input. As the input num increases by 1, 1 loop is added and each additional loop takes the same amount of time. */
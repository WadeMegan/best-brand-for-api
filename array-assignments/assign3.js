function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3); //1
    arr.push(5); //2
    arr.push(15); //3
    arr.push(19); //4
    arr.push(45); //5
    arr.push(10); //6

    arr.pop();
    arr.pop();
    arr.pop();

    console.log(arr);
}

main()

/* The length of the array is 3 now because the last 3 values are "popped off". The capacity (6) and memory addresses (6), however, stay the same because pop just leaves an empty space. */
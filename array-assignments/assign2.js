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

    console.log(arr);
}

main()

// What is the length, capacity and memory address of your array?

/* At first, when there is only one item in the array, the length is 1. However, the capacity is 3, meaning the array can hold 3 elements before needing to resize. Therefore, the array takes up 3 memory addresses. */

// After adding arr.push()'s -- What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code.

/*

push 2:
Now the length is two. The capacity is still 3 and still 3 memory addresses. 

push 3: 
Now the length is 3. The capacity is still 3 and still 3 memory addresses. 

push 4:
Now, the length is 3. The capacity is 6 and there are 6 memory addresses.

push 5:
Now the length is 4. The capacity is still 6 and there are 6 memory addresses.

push 6:
Now the length is 5. The capacity is still 6 and there are 6 memory addresses.

*/
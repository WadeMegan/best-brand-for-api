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
    arr.pop();
    arr.pop();
    arr.pop();

    arr.push("tauhida")

    console.log(arr);
    console.log(arr[0])
}

main()

/* The result is that the first item is "tauhida". This is because when I "popped" all of the other elements out of the array the new element got pushed to the beginning.*/

/* The resize function copies the existing array and then creates a larger chunk of memory with the old array.*/
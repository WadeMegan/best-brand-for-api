// Iterative Versions

//COUNTING SHEEP

const countingSheep = function(numSheep) {
    for(let i=numSheep;i>-1;i--){
        if(i===0){
            console.log("All sheep jumped over the fence.")
        }
        else{
            console.log(`${i}: Another sheep jumped over the fence.`)
        }
    }
}

//countingSheep(3)

//POWER CALCULATOR

const powerCalculator = function(base,exponent){
    if(exponent<0){
        console.log('exponent should be >= 0')
    }
    else if(exponent===0){
        console.log(1)
    }
    else {
        let originalBase=base
        for(let i=1; i<exponent;i++){
            base = base*originalBase
        }
        console.log(base)
    }
}

//powerCalculator(3,3)

//REVERSE STRING

const reverseString = function(string){
    var reversedWord=""

    for(let i=string.length-1;i>=0;i--){
        reversedWord += string[i]
    }
   return reversedWord
}

//console.log(reverseString('hello'))

//NTH TRIANGULAR NUMBER

const triangularNumber = function(n){
    let sum = 0

    //console.log('hello')
    for(let i=1;i<=n;i++){
        sum += i
    }

    console.log(sum)
}

//triangularNumber(4)

//STRING SPLITTER

//this works expect for the fact that it pushed the separated words on in reverse
const stringSplitter = function(string,separator){
    const results = []

    let i=0

    let stringCopy = string

    for(let i=stringCopy.length-1;i>-1;i--){
        //console.log(string[i])
        if(stringCopy[i]===separator){
            let pushWord = stringCopy.substring(i+1, stringCopy.length+1)
            console.log('pushWord',pushWord)
            results.push(pushWord)
            stringCopy = stringCopy.substring(0, i)
            console.log('stringCopy',stringCopy)
        }
    }

    if(!stringCopy.includes(separator)){
        results.push(stringCopy)
    }

    return results
}

//console.log(stringSplitter("02/15/2020","/"))

//FIBONACCI

function fib(n){
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++){
      arr.push(arr[i - 2] + arr[i -1])
    }
   return arr[n]
}

//console.log(fib(7))

//FACTORIAL

const factorial = function(num){
    let factorial = 1
    
    for(let i=1;i<num+1;i++){
        factorial = factorial*i
    }

    return factorial
}

//console.log(factorial(5))

//FIND A WAY OUT OF THE MAZE

    //not done

//FIND ALL THE WAYS OUT OF THE MAZE

    //not done

//ANAGRAMS

    //not done

//ORGANIZATION CHART

    //not done

//BINARY REPRESENTATION

    //not done
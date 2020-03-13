const stringSplitter = function(string,separator){
    const results = []

    if(){} //take out, just there for error

    if(string.indexOf(separator)===-1){
        results.push(string)
        console.log(string)
        return results
    }
    else{
        const index = string.indexOf(separator)
        let beginningWord = string.substring(0,index)
        console.log(beginningWord)
        results.push(beginningWord)
        let restOfWord = string.substring(index+1, string.length)
        stringSplitter(restOfWord,separator)
    }

    return results
}

console.log(stringSplitter("02/15/2020","/"))

// it is breaking up the string how i want it, 
// but having hard time getting to push onto results

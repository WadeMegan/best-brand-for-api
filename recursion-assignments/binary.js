const binary = function(num){
        
    if(num/2<1){
        const remainder= num%2
        return "1"
    }
    else {
        const remainder= num%2
        return remainder+binary(Math.floor(num/2))
    }
}

console.log(binary(25))
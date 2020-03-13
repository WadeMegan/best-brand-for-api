const powerCalculator = function(base,exponent){
    if(exponent<0){
        return 'exponent should be >= 0'
    }
    else if(exponent===0){
        return 1
    }
    else {
        return base*powerCalculator(base,exponent-1)
    }
}

console.log(powerCalculator(3,3))
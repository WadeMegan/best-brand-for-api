const triangularNumber = function(nth){
    if (nth<=1){
        return nth
    }
    else {
        return nth + triangularNumber(nth-1)
    }
}

console.log(triangularNumber(2))
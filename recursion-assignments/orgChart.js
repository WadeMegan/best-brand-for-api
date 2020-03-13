const orgChart = function(object){
    
    if(){}
    
    console.log(Object.keys(object).length)
    for(let i=0; i<Object.keys(object).length;i++){
        console.log(object[i])
        orgChart(object[i])
    }
}

let object = {
    0:{0:"Zuckerberg"},
    1:{0:"Schroepfer",1:"Schrage",2:"Sandberg"}
}

console.log(orgChart(object))
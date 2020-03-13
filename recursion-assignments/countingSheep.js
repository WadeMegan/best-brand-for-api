const countingSheep = function(numSheep) {
    if(numSheep===0){
        console.log("All sheep jumped over the fence")
    }
    else {
        console.log(`${numSheep}: Another sheep jumped over the fence`)
        countingSheep(numSheep-1)
    }
}

countingSheep(3)
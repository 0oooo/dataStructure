const euclid = (m, n) => { 
    console.log("hello euclid");
    let biggerNumber = m; 
    let smallerNumber = n; 
    while(biggerNumber % smallerNumber !== 0){
        if(smallerNumber === 0){
            return smallerNumber; 
        }
        let resultOfModulo = biggerNumber % smallerNumber; 
        biggerNumber = smallerNumber; 
        smallerNumber = resultOfModulo; 
        console.log(`biggerNumber = ${biggerNumber}, smallerNumber = ${smallerNumber}, biggerNumber % smallerNumber = ${biggerNumber % smallerNumber}`);
    }
    console.log(smallerNumber);
    return smallerNumber; 
}

euclid(77, 21);
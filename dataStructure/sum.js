const bestSumEv = (array) =>{
    const average = (array[0] + array[array.length - 1]) / 2; 
    console.log(`average = ${average}`);
    const sum = average * array.length; 
    console.log(`sum = ${sum}`);
    return bestSumEv;
}

const myArrayTest = [1, 2, 3, 4, 5, 6, 7];
bestSumEv(myArrayTest);
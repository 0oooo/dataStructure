const mySortedArray = [1, 3, 5, 7, 10, 21, 34, 56, 67, 71, 111];
const mySuccessfullElement = 67; 
const myUnseccessfullElement = 90; 


const binarySearchAlg = (sortedArr, searchTerm) => {
    let left = 0; 
    let right = sortedArr.length - 1;
    while((left <= right)){
        let middle = left + (Math.floor((right - left) / 2));
        if(sortedArr[middle] === searchTerm) return middle; 
        if(searchTerm < sortedArr[middle]) right = middle - 1; 
        if(searchTerm > sortedArr[middle]) left = middle + 1;  
    }
    return null; 
}

console.log(binarySearchAlg(mySortedArray, mySuccessfullElement));
console.log(binarySearchAlg(mySortedArray, myUnseccessfullElement));
const myarrayToSort = [3, 11, 89, 2];

const merge = (arr1, arr2) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    if(arr1.length === 0) result = [...arr2];
    if(arr2.length === 0) result = [...arr1];
    while (leftIndex < arr1.length && rightIndex < arr2.length) {
        if (arr1[leftIndex] < arr2[rightIndex]) {
            result.push(arr1[leftIndex])
            leftIndex++;       
        } else {
            result.push(arr2[rightIndex])
            rightIndex++  
        }    
    }
    return result; 
}

const mergeSort = (arrayToSort) => {
    if (arrayToSort.length === 1) return arrayToSort   
    let middle = Math.floor(arrayToSort.length / 2); 
    let left = arrayToSort.slice(0, middle); 
    let right = arrayToSort.slice(middle, arrayToSort.length);
    
    return(merge(mergeSort(left), mergeSort(right)));
}

console.log(mergeSort(myarrayToSort));
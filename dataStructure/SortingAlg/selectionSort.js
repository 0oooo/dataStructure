const myarrayToSort = [3, 11, 89, 2, 16, 85, 4, 1];


const swap = (arr, element1, element2) => {
    const tempElement = arr[element1]; 
    arr[element1] = arr[element2]; 
    arr[element2] = tempElement; 
    return arr; 
}

const findMin = (arr) => {
    let minIndex = 0;
    for(let i = 0; i < arr.length; i++){
        const min = arr[minIndex];
        if(arr[i] < min){
            minIndex = i; 
        }
    }
    return minIndex; 
}

const selectionSort = (arrayToSort) => {
    const right = arrayToSort.length; 
    for(let i = 0; i < arrayToSort.length; i++){
        const left = i;
        const currArrPortion = arrayToSort.slice(left, right);
        const minIndex = findMin(currArrPortion) + left;      
        if(arrayToSort[minIndex] < arrayToSort[left]) arrayToSort = swap(arrayToSort, minIndex, left);
    }

    return arrayToSort; 
}

console.log(selectionSort(myarrayToSort));
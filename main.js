console.log('Hello world');

// Selection Sort Algorithm
const swap = function(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

const indexOfMinimum = function(array, startIndex) {

    let minValue = array[startIndex];
    let minIndex = startIndex;

    for(let i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}; 

const selectionSort = function(array) {
    let x;
    for(let x = 0; x < array.length; x++) {
        x = indexOfMinimum( array, x);
        swap( array, array[x], x);
    }
};

let array = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array);
console.log("Array after sorting:  " + array);

//The correct answer should be -> [7, 9, 11, 22, 42, 88, 99]

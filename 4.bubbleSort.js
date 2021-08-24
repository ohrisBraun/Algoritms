let arr = [9,3,2,6,5, 11, -5, 2, 0, 122];
let count = 0;

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            count += 1;
        }
    }
    return array;
}

console.log(bubbleSort(arr));
console.log('length = ', arr.length)
console.log('count =',count);
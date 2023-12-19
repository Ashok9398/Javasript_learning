const numbers = [65, 44, 12, 4];
/*numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
console.log(numbers);*/

customForEach(numbers,myfunction);
console.log(numbers);
function customForEach(numbers,callback) {
    for(let i = 0;i<numbers.length;i++){
        numbers[i] = callback(numbers[i]);
    }
}

function myfunction(value){
    return value * 10;
}
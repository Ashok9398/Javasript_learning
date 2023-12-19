//Program to multiply every array element by 2.

/*const inbuiltEx = [1,2,3,4,5];
let modifiedAr = inbuiltEx.map(myfunction);

function myfunction(value){
    return value*2;
}
console.log(modifiedAr);*/

const givenArray = [1,2,3,4,5];
let modifiedArr = customMap(givenArray,myfunction);
console.log(modifiedArr);

function customMap(arr,callback) {
    let modifiedArr = [];
    for(let value of arr){
         modifiedArr.push(callback(value));
    }
    return modifiedArr;
}
function myfunction(value){
    return value * 2;
}
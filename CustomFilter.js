//program to filter those names whose length is over 3 characters.

/*const names = ["Ashok","Ram","Sid","John","Joe","Jane"];
const namesWithLengthOver3 = names.filter(myfunction);

function myfunction(value) {
    return value.length > 3;
}
console.log(namesWithLengthOver3);*/

const names = ["Ashok","Ram","Sid","John","Joe","Jane"];

const namesWithOver3Char = customFilter(names,myfunction);
console.log(namesWithOver3Char);

function customFilter(names, callback){
    let arr = [];
    for(let value of names){
        if(callback(value)){
            arr.push(value);
        }
    }
    return arr;
}


function myfunction(value){
    return value.length >3;
}

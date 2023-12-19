//program to create a reduce function..
/*const text = someText.reduce(myfunction);

function myfunction(value,text){
    return value+" " + text;
}
console.log(text);*/

const someText = ["This","is","a","custom","reduce","example."];



const text  = customReduce(someText,myfunction);
console.log(text);

function customReduce(text,callback){
    let ans = "";
    for(let value of text){
        ans = callback(value,ans);
    }
    return ans;
    
}

function myfunction(value,text) {
    return text +" "+value;
}
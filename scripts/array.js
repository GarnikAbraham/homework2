var arr = [1,2,3,4,5];
//console.log(arr);

var arr1 = new Array ("hi mic");
var arr2 = new Array (5);
//console.log(arr1);
//console.log(arr2);

var arr3 = Array.of(2);
//console.log(arr3);

var arr4 = Array.from("hello");
//console.log(arr4);

arr.push(56);
//console.log(arr);

arr.pop();
//console.log(arr);

arr.unshift('hello');
//console.log(arr);

arr.shift();
//console.log(arr);

var index =arr.indexOf(45);
//console.log(index);

var lastIndex = arr.lastIndexOf(5);
//console.log(lastIndex);

var concatedArr = arr.concat(arr4);
//console.log(concatedArr);



//slice method

var arrSlice = [6,45,5,5, "a", "b", "hi"];
var spliced = arrSlice.slice(1,5);

var splicedMins = arrSlice.slice(2, -1);

//console.log(arrSlice, 'original array');
//console.log(splicedMins, 'modified');


//splice method


var arrSpliced = [6,45,5,5, "a", "b", "hi"];
var spliced =  arrSpliced.splice(2,1);

console.log(arrSpliced);
console.log(spliced);


























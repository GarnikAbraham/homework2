var arr = [
    ["wake up", 8],
    ["Eat", 10],
    ["work", 12],
    ["lunch", 14],
    ["sleep", 22]
];
arr.push(["homeWork",13]);
arr.pop();
arr.splice(1,0, ["programming lesson", 19]);
console.log(arr);
console.log(arr[4],[0]);

for (var i=0; i< arr.length; ++i){
    //console.log(arr[i]);
    var InnerArrayLength = arr[i].length;
    for(var j  = 0; j<InnerArrayLength; ++j){
        console.log("[" + i + "," + j + "]");
    }
}
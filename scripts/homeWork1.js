var fruits = ["banana", "orange", "apple" ];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);
//Այսպես եմ արել, որպեսզի բերի այն միրգը, որը ես ցանկանում եմ;

fruits[1] = 'pear';
console.log(fruits);
//Այս տարբերակով փոխել եմ մեկ զանգվածը մյուսով

fruits[3]= 'grapes';
console.log(fruits);

console.log(fruits.length);
//այստեղ թե քանի զանգված կա մեջը

fruits.pop();
console.log(fruits);

fruits.push("strawberry");
console.log(fruits);

console.log(fruits.shift());
console.log(fruits);

fruits.unshift("ananas", "lime");
console.log(fruits);
//unshift ի ժամանակ դու կարող ես ավելացնել միանգամից մի քանի զանգվածներ

var num = [
    [12,15,20],
    [18,3,56],
    [34,21,24]
];

console.log(num[2][2]);
// կարող ենք միաժամանակ մի քանի մոդուլներ բացել, և կանչել նրանց : օչինակ այստեղ ես կանչել եմ 2 րդ մոդուլի 2 րդ զանգվածը , որը երրորդ տողի երրորդ թիվն է 24
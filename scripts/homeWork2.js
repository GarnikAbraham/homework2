var arr = [12, "age", "fruits"];
arr.splice(1,1);
console.log(arr);

arr.splice (1,2, "Armenia", "world");
console.log(arr);

var name = ["Alex", "Ann", "Robert", "Tatev"];
console.log(name.slice(0,8)); 
//Այս տարբերակում բերել է 0-ից 8 զանգվածները, մեր դեպքում "Alex", "Ann" 
console.log(name.slice(-5));
//իսկ այս դեպքում -5 գրելով բերելե վերջին անվան անունը

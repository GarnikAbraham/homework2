var obj = {
   name: {
       firstName: 'Anna',
       lastName: 'Abrahamyan'
   },
    age: 27,
    gender: "female",
    isWorking: false,
    hobbies: ['danscing', 'singing', 'cooking']
};
//console.log(obj.name.firstName);

//delete obj.age;
//console.log(obj);


var obj = new Object();
obj.content = "Do Home Work";
obj.time = "12.00";
//console.log(obj);

var car = new Object(),
    type = 'nissan',
    year = '2015';
car[type] = "carType";
car[year] = "carYear";
console.log(car);
        
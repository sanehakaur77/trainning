
//  we can store the mupltiple data types elemnts in array in js
//array is mutable and string is immutable
// let arr=[1,2,"saneha",true,null,undefined];
// console.log(arr[2]);
// console.log(arr[arr.length-1]);

//methods in arr
// arr.push("varsha");
// //but it only adds the element in last
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr[3] = "varsha"; // but it take the pos of the elemnt that already exist 
// console.log(arr);

//The slice() method in JavaScript is used to extract a portion of an array or string without modifying the original one.

// const fruits = ['apple', 'banana', 'mango', 'orange'];
// const sliced = fruits.slice(1, 2); // from index 1 to 2
// console.log(sliced); // ['banana', 'mango']

//The slice() method does not change the original array — it returns a shallow copy of the selected elements.
 
//But splice() changes the array:

// const arr = [10, 20, 30, 40, 50];
// const spliced = arr.splice(1, 3); // removes 3 elements from index 1

// console.log(spliced); // [20, 30, 40]
// console.log(arr);     // [10, 50] — original array is modified


//object 
// console.log(this);
// let obj = {
//     name : "saneha",
//     age:19,
//     subjects: {
//         1:["html","css","nodejs","react"],
//         2:["ed","pps","oops","flat"],
//          specilization:{
//             1:"pps",
//             2:"os",
//             3:["se","flat"],
//          }
//     },
//     college:"rayat bhara",
//     //inobjects the functions are called method
//     myfunction:function(){ //  when use the arrow function console me koi output nahi ayega 

//         //here we use this to acess object elements
//      console.log(this.name);
//         //  this 
//     }
 
// }
// obj.name="varsha";;
//  console.log(obj)
//  obj.myfunction();

// console.log(obj.subjects.specilization[3][0]);


// console.log(obj.name);
// // we can acess the obj element in multiple ways 
// //1. dot notaion 
// const student = {
//   name: "Saneha",
//   age: 21
// };

// console.log(student.name); // "Saneha"
// console.log(student.age);  // 21


// //2. bracket notaion

// const student2 = {
//   name: "varsha",
//   age: 21
// };

// console.log(student2["name"]); // "Saneha"
// console.log(student2.age);  // 21


// //3. for each loop

// for (let key in student) {
//   console.log(key, student[key]);
// }

//  console.log(Object.keys(student));
//     console.log(Object.values(student));

 //  condtions
//  let a=31;
//  let b=31;
//  if(a<b){
//     console.log("a is less than b");
//  }
//  else if(a==b){
//     console.log('a is equal to b');
//  }
//  else{
//     console.log('a is no less than b');
//  }
//loops 
//  1  forloop-string,arr 2.while-string,arr loop 3.for of loop-arr 4.for in loop -object
// let nme="varsha";
// for(let i=0;i<nme.length;i++)
// {
//     console.log(nme[i]); 
// }
// let ptr=0;
// let s="saneha";
// while(ptr<s.length){
//     console.log(s[ptr++]);
   
// }
// for(let i=0;i<10;i++){
//     console.log(i);
// }
// let arr=[1,2,3,4,5];  
// let n=arr.length;
// for(let i=0;i<n;i++){
//  // 0<1 true
//  // 1<2 true
//  //2<3  true
// // 3<4  true
// // 4<5  true
// // 5<5  false loop will break
      
//     console.log(arr[i]);
// }
// let a=0;
// do {
//     console.log('saneha');
//     a++;
// }while(a<10)
// let i=1;
// while(i<10){
//     console.log(i);
//     i++;

// }
// let b="Kamal";
// for(let index=b.length-1;index>=0;index--){
//     console.log(b[index]);
   
// }
// for(let i=0;i<n;i+=0.5){
//     console.log(i);
// }

// let arr=[1,2,3,4,5,6,7,8];
// for (let num of arr){
// console.log(num);
// }
//  let str1="saneha";
 
// for( let ch of str1){
//     console.log(ch);
// }

// let obj={
//     name:"saneha",
//     class:"Cse b",
//     rollno :2305595
// }
let obj = {
    name : "saneha",
    age:19,
    subjects: {
        1:["html","css","nodejs","react"],
        2:["ed","pps","oops","flat"],
         specilization:{
            1:"pps",
            2:"os",
            3:["se","flat"],
         }
    },
    college:"rayat bhara",
    //inobjects the functions are called method
    myfunction:function(){ //  when use the arrow function console me koi output nahi ayega 

        //here we use this to acess object elements
     console.log(this.name);
        //  this 
    }
}
//to print the charcaters 
for(let key in obj){
    if(typeof obj[key]=="string"){
        console.log(obj[key]);
        
    }
}
let arr=[1,2,3,4,5,6,7,8,9];
for(let i in arr){
    if(i%2!=0){
        console.log(`element  ${i} is even `);
    }
}
//  template literals ``(backtack)
let myName='saneha';
console.log(`hello my name is ${myName}`);
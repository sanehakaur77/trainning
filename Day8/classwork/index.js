// // // higher oerder function
// // let arr=[1,2,3,4,5,6,7,8];
// // // 1.map
// // //syntax arr.map((elemnent ,index)=>{})

// // arr.map((element,index)=>{
// // console.log(element,index);
// // }) 
// // let res=arr.map((ele,index)=>{  
// //     return ele*2;//  returns a new array  apply the same function at once to all the elements
// // })
// // // console.log(res);

// // // 2.for each
// // arr.forEach((element)=>{ // returns undefined so its value cannot be stored in any variable
// //     console.log(element);

// // })
// // //  3.filter syntax:arr.filter((ele,index)=>{}) // returns a new array value can be stored in a variable
// // //  diff of == and === //  == check if two values are same like 4 == "4"-> return true and 4==="4" ->return false

// //     let res2=arr.filter((element)=>{
// //         return element%2==0;
// //     })
// //     console.log(res2);
// //     let arr2=[1,2,3,4,5,6,7,8,"rahul",true,undefined];
// //     let res3=arr2.filter((ele)=>{
// //         return typeof(ele)=="string";
// //     });
// //     let res4=arr2.filter((ele,index)=>{
// //         return index%2!=0;
// //     })
// //     console.log(res3);   // num+string=string
// // // reduce
// //        let output= arr.reduce((acc,curr)=>{   //  acc first element of array
// //           return acc+curr;
// //         })   
// //         let out2=arr.reduce((acc,curr)=>{   //  acc first element of array
// //           return acc+curr;
// //         },5)    // now acc become 5
// //         console.log(output);
// //         console.log(out2);
// //         //2.method
// // // every
// // let out=arr.map((ele,index)=>{ // jo output milega usko dubara input me lelo
// //     return ele**2;
// // }).filter((ele)=>{
// //     return ele%2==0;
// // }).map((ele,index)=>{
// // console.log(ele);
// // })
// // map
// let arr=[1,2,3,4,5,6];
// let res1=arr.map((ele,index)=>{
//    return ele;
// })
// console.log(res1);
// let arr2=["saneha","varsha","sheetal","jyoti"];
//  let res2=arr2.filter((ele)=>{
//     return ele[0]=='s';
//  })
//  console.log(res2);
//  // reduce
 
// let res=arr.reduce((acc,curr)=>{
//     return acc+curr;
// },0)
// console.log(res);
// //  for each 
// let sum=0;
// arr.forEach((ele)=>{
//  console.log(ele**3);

// })



    



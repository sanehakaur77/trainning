// let a="saneha";
// console.log(a);
// //  set time out 
// setTimeout(()=>{
//     console.log('delay of two milliseconds');
// },2000);
// console.log('console between 1 and 2 milliseconds');
// setTimeout(()=>{
//     console.log('delay of one milliseconds');
// },1000);
// setTimeout(()=>{

//     for(var i=1;i<=5;i++){
//         console.log(i);
//     }
// },0)
//  Promises and apis

//  async funtion syntax 
// async function myFUnction()
//{
//
//}
// const url='https://fakestoreapi.in/api/products';
// const myPromise=async()=>{
//     const response= await fetch(url);
//     const data =await response.json();
//     console.log(data.products);
    
// }
// myPromise();
const url='https://official-joke-api.appspot.com/jokes/random';
const fetchjoke=async()=>{
const res=await fetch(url);
const data=await res.json();
console.log(data);

}
fetchjoke();
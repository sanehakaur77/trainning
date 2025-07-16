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
// {

// }
const url='https://fakestoreapi.com/products';
const mainbox=document.getElementById('container');
const sortselect=document.getElementById('sort');
const category=document.getElementById('category-selector');
console.log(sortselect)


let products=[];
let debounceTimer;

const searchinput=document.getElementById('search-input');


const fetchApi=async()=>
{
    const res=await fetch(url);
    const data=await res.json();
    
    products=data;
    
      showdata(products);
}




 function showdata(data){
   mainbox.innerHTML = ""; 
    document.querySelector(".loader-container").style.display = "none"
  
  data.forEach((ele,index)=>{
   console.log(ele)
    const box=document.createElement('div');
    box.style.border='2px solid black';
    box.className='product-div';
    box.style.textAlign='center';
    box.style.paddingTop='20px';
    const para1=document.createElement('p');
    para1.innerHTML=ele.title;
    const para2=document.createElement('p');
    para2.innerHTML=`Category: ${ele.category}`;
    const image=document.createElement('img');
    const para3=document.createElement('p');
    para3.innerText=`Price: ${ele.price}`;
    const para4=document.createElement('p');
    para4.innerText=`Rating :${ele.rating.rate}`;
    image.src=ele.image;
    image.style.height='150px';
    image.style.width='150px';
    const btn=document.createElement('button');
    btn.innerText='Add to Cart';
    btn.className='btn';
    btn.addEventListener('click',()=>{
      addToCart(ele);
    })
    box.append(para1,image,para2,para3,para4,btn);
    mainbox.append(box);
    
  })
 
}

function addToCart(ele){
let cart =JSON.parse(localStorage.getItem("CartData"));
   for(let i=0;i<cart.length;i++){
    if(cart[i].id==ele.id){
      alert('Item already in cart');
       return;
    }
   }
    let cartArray=JSON.parse(localStorage.getItem("CartData"))||[];
   cartArray.push(ele);
  
  localStorage.setItem("CartData",JSON.stringify(cartArray));
 alert('Item is added to cart');

}
async function searchItem(){
  clearTimeout(debounceTimer);

debounceTimer=setTimeout(()=>{
  let searchItem=searchinput.value.toLowerCase();
console.log(searchItem)
let filterProducts=products.filter((element)=>{
  return element.title.toLowerCase().includes(searchItem);
})
console.log(filterProducts);

showdata(filterProducts);
},500)
  
}
sortselect.addEventListener('change',sorting);
function sorting() {
  let SortBy = sortselect.value;
  let sortedData = [...products]; 

  if (SortBy === "PriceLowHigh") {
    sortedData.sort((a, b) => a.price - b.price);
  } else if (SortBy === "priceHighLow") {
    sortedData.sort((a, b) => b.price - a.price);
  } else if (SortBy === "ratingHighLow") {
    sortedData.sort((a, b) => b.rating.rate - a.rating.rate);
  } else if (SortBy === "ratingLowHigh") {
    sortedData.sort((a, b) => a.rating.rate - b.rating.rate);
  }

  showdata(sortedData);
}
category.addEventListener('change',sortByCategory);
function sortByCategory(){
 let filteredItem= [...products];
 let value=category.value;
 if(value !==""){
  filteredItem=filteredItem.filter((element)=>{
    return element.category.trim()===value.trim();
  })

 }
 mainbox.innerHTML=""
 
 showdata(filteredItem);
    
    
  
  
}

fetchApi();
searchItem(()=>{
showdata()
},4000);

//  function movetoCart{
  // window.location="/cart.html";
//}

//  while storing the data we have to stringify it
//----------------
// function getDatafromStrorage(){
//   let data=JSON.parse(localStorage.getItem("Cartdata"));
//  //  when we have to get data from local stg we have to parse data
// }


// getDatafromStrorage();
//--------------------
// const mainbox=document.getElementById('container');
// const myPromise=async()=>{
//     const response= await fetch(url);
//     const data =await response.json();
//     console.log(data);
   

    
// }
// myPromise();
//  function showData(res){
    
   
//   res.forEach((ele,index)=>{
       
//         const box=document.createElement('div');
//         box.style.border='2px solid black';
//         const para1=document.createElement('p');
//         para1.innerText=`Brand:  ${ele.category}`;
//         const para2=document.createElement('p');
//         para2.innerText=`Category: ${ele.category}`;
//         const para3=document.createElement('p');
//         const image=document.createElement('img');
//         image.src=ele.image;
        
//         para3.innerText=`Price: $ ${ele.price}`;
//         box.style.textAlign='center';
//         const para4=document.createElement('p');
//         para4.innerText=`discount $ ${ele.discount}`;
//         image.style.height='150px';
//         image.style.width='150px';
//         const btn=document.createElement('button');
//         btn.className='btn';
//         btn.innerText='Buy Now';
//         box.append(para1,image,para2,para3,para4,btn);
//         btn.style.height='40px';
//         btn.style.width='100px';
//         btn.style.borderRadius='6px'
//         // btn.style.backgroundColor='black'
//         btn.style.color='white';
//         btn.style.marginBottom='10px';
        
//         btn.addEventListener('click',()=>{
            
//             alert('item is added to cart');
//         })
        
//         mainbox.append(box);
       
       
//     })
// }
// const url='https://official-joke-api.appspot.com/jokes/random';
// const container=document.getElementById('container');
// const fetchjoke=async()=>{
// const res=await fetch(url);
// const data=await res.json();
// const heading1=document.createElement('h1');
// const heading2=document.createElement('h1');
// container.style.height="300px";
// container.style.width="300px";
// container.style.border="2px solid green";
// container.style.textAlign="center";
// container.style.margin="auto";
// container.style.paddingTop="20px";
// container.style.marginTop="30px";
// heading1.innerText=data.setup;
// heading2.innerText=data.punchline;
// container.append(heading1,heading2);



// }
// fetchjoke();



const button=document.getElementById('btn');

const crossbtn=document.getElementById('crossbtn');
const slidebar=document.querySelector('.slidebar');
crossbtn.addEventListener('click',()=>{
slidebar.classList.remove('active');
slidebar.classList.add('hidden');
})

console.log(button,slidebar)
button.addEventListener('click',()=>{
slidebar.classList.toggle('active');
})
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
    btn.style.marginTop='10px';
    btn.addEventListener('click',()=>{
      addToCart(ele);
    })
    box.append(para1,image,para2,para3,para4,btn);
    mainbox.append(box);
    
  })
 
}

function addToCart(ele){
let cart =JSON.parse(localStorage.getItem("CartData")) ||[];
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

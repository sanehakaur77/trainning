
let CartData=JSON.parse(localStorage.getItem("CartData")) || [];
const mainbox=document.getElementById('container');

async function showdata(data){
  if(data.length==0){
    mainbox.innerText="There is no item in the Cart";
    return ;
  }
  data.forEach((ele,index)=>{
   console.log(ele)
    const box=document.createElement('div');
    const button2=document.createElement('button');
    button2.innerHTML='✖';
    button2.className='btn2';
    box.style.border='2px solid black';
    box.style.textAlign='center';
    box.style.paddingTop='20px';
    const para1=document.createElement('p');
    para1.innerHTML=ele.title;
    const para2=document.createElement('p');
    para2.innerHTML=`Category: ${ele.category}`;
    const image=document.createElement('img');
    const para3=document.createElement('p');
    para3.innerText=`Price: $${ele.price}`;
    const para4=document.createElement('p');
    para4.innerText=`Rating :${ele.rating.rate}`;
    image.src=ele.image;
    image.style.height='150px';
    image.style.width='150px';
    
   
    
    button2.addEventListener('click',()=>{
        deleteItem(ele,index);
    })
    box.append(button2,para1,image,para2,para3,para4);
    mainbox.append(box);
    
  })
 
}
showdata(CartData);
// localStorage.removeItem("Cartdata");
 function deleteItem(ele,index) {

   mainbox.innerHTML="";
  let deletedCartData =CartData.splice(index, 1);
 

  localStorage.setItem("CartData", JSON.stringify(CartData));

  showdata(CartData);
  location.reload();
}


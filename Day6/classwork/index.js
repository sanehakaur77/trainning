const keys=document.querySelectorAll('.key');
const input=document.getElementById('input');
let expression="";
keys.forEach((key)=>{
  key.addEventListener('click',()=>{
      let value=key.textContent;
  if(value==="="){
    try{
    expression=eval(expression);
    input.value=expression;
       
    }
    catch{
     expression="Error";
     input.value=expression;
    }
  }
  else if(value==="C"){
    expression="";
    input.value=expression;
  }
  
    else{
        expression+=value;
        input.value=expression;
    }
})
})
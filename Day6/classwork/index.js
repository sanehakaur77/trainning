console.log("hello");
const keys=document.querySelectorAll('.key');
let expression="";
keys.forEach((key)=>{
  key.addEventListener('click',()=>{
    
    let value =key.innerText;
    if(value==="="){
        try{
            expression=eval(expression);
        }
        catch(err){
            expression="Error";
        }
    }
    else if(value==="C"){
        expression="";
        input.value=expression;
    }
  else{
    expression+=value;
  }
  input.value=expression;
    
    
  })
    
})
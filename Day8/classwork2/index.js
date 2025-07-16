// const username=document.getElementById('username');
// const email=document.getElementById('email');
// const password=document.getElementById('password');
// const confirmpassword=document.getElementById('confirmpassword');
const form=document.getElementById('form');
const   userdata=document.getElementById('userdata');
console.log(form);
console.log(username.value);
form.addEventListener('submit',(e)=>{
e.preventDefault();
const username=document.getElementById('username').value;
const email=document.getElementById('email').value;
const password=document.getElementById('password').value;
const confirmpassword=document.getElementById('confirmpassword').value;
let obj={
    username,email,password,confirmpassword
} // default arrange alphabetically
console.log(obj);

if(password.length<6)
{
    return alert('password must be 6 characters long')
}
if(password!=confirmpassword){
    return alert('passwords do not match');
}
alert('form submit successfully');
const heading=document.createElement('p');
heading.innerText=username;
const p1=document.createElement("p");
p1.innerText=email;
const p2=document.createElement("p");
p2.innerText=password;
const p3=document.createElement("p");
p3.innerText=confirmpassword;
userdata.style.height="300px";
userdata.style.width="300px";
userdata.style.border="3px solid green";
userdata.style.borderRadius="10px";
userdata.style.textAlign="center";
userdata.style.margin="auto";
userdata.style.marginTop="30px";

userdata.append(heading,p1,p2,p3);
});
//submit event sirf form pe lagta hai
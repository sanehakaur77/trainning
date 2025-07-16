//  using inbuilt module -http
// const http=require('http');
// //  creating serer with http
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/plain'});
//     //  when we have to send the json data
//     //res.writeHead(200,{'content-type':'application/json'});
// res.end('server is running');
// })
// const port=8080;
// server.listen(port,()=>{
//     console.log(`server is running on port http://localhost:${port}`);
// });
//-----creating server using express module-----
// const express=require('express');
// const data=require('./data.json')
// const app=express();
// const port=8080;

// app.get('/',(req,res)=>{

// res.send("saneha");
// })
// app.get('/data',(req,res)=>{
//    res.send(data);
// })
// app.listen((port),()=>{
//     console.log(`server is running on port http://localhost:${port}`);
// });
// const fs=require('fs');
// fs.writeFile('./files/saneha.text','saneha',(err)=>{
//     if(err)
//     throw err;
//     console.log('file is created')
// })
// fs.appendFile('./files/saneha.text','appended data',(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('file is created successfully')
// })
// fs.open('./files/saneha.text','r',(err,file)=>{
//     if(err) throw err;
//     console.log('file is created successfully')
// })
// const fs=require('fs');
// fs.writeFileSync('./files/saneha.txt','saneha');
// fs.writeFile('./saneha.txt','hello world',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log('File isn created succesfully');
//     }
// })
// const res=fs.readFileSync('./files/saneha.txt','utf8')
// {
//     console.log(data)
// }
// const fs=require('fs');
// fs.unlink('./saneha.txt',(err)=>{
//     if(err) throw err;
//     console.log('file is deleted sucessfully')
// })
// fs.readFile('./files/saneha.txt','utf8',(err,data)=>{
// if(err) throw err;
// console.log(data)
// })
const cowsay=require('cowsay');
console.log(cowsay.say({
    text:"I'm a moooodule",
    e:'o0',
    T:'U',
  
}))
// const express=require('express');
// const app=express();
//mvc structure
//  why use code splitting
//  configs ->database connectivity
// controllers->api ka logic part
//midlewares->middlewares
// models-> we will define the schema in it
// routes->routes
//utils->small helper functionsa
// app.get('/',(req,res)=>{
//     res.send('hello');
// })
// const port =8080;
// app.listen(port,()=>{
//     console.log(`server is running at http://localhost:${port}`)
// })

const express=require('express');
const app=express();
app.use(express.json());
const userroute=require('./routes/routes');
const {connect} =require('./configs/config');
app.get('/',(req,res)=>{
    res.send('hello');
})
app.use('/api',userroute);

const port =8080;
connect();


app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
});

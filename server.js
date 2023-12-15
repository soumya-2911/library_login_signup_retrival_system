const express=require('express');
const app=express();

//Mongodb setup
const {connectToDb,getDb}=require('./db')
let db
connectToDb((err)=>{
  if(!err){
    app.listen(3000,()=>console.log("listening"));
  }
  db=getDb()
})
//************ */

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions))

//app.listen(3000,()=>console.log("listening"));

app.use(express.static('page'));
app.use(express.json({limit:'1mb'}));


app.post('/signup',(request,response)=>{
    
   const collection=db.collection(request.body.name)
   collection.insertOne({'main':'init',password:request.body.password,"count":0}).then(()=>{response.json({data:"ok"})}) 
});



async function check(u_name){
   const collection=db.collection(u_name)
   const real_pass= await collection.findOne({'main':'init'});
   return real_pass.password
}
app.post('/login',(request,response)=>{
   const pass=check(request.body.name);
   pass.then(p=>{if(request.body.password==p){
      response.json({data:request.body.name});
   }})
   
   
}   
);

/* const weather=async(lat,lon,key)=>{
   const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`,{
       method: "POST", // or 'PUT'
       headers: {
           //'Accept': 'application/json',
         "Content-Type": "application/json",
         //'Access-Control-Allow-Origin':'*'
       },
       //body: JSON.stringify({date,username,heading})
   });
   const data = await response.json();
   
   return data 
} */
async function pos(book_name){
   const collection=db.collection("library")
   const real= await collection.findOne({'name':book_name});
   return real.position
}
app.post('/dashboard/book',(request,response)=>{
   const pass=pos(request.body.book_name);
   pass.then(p=>response.json({data:p}))
   
   
   
   }) 




const profile=document.getElementById("name");

let params = new URL(document.location).searchParams;
let username = params.get("u_name");
const book=document.getElementById("book")
const display=document.getElementById("display")
const button=document.getElementById("button");
profile.innerHTML=username;

const book_k=async (book_name) => {
    
    const response=await fetch('http://localhost:3000/dashboard/book',{
        method: "POST", // or 'PUT'
        headers: {
            //'Accept': 'application/json',
          "Content-Type": "application/json"
          //'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({book_name})
      });
    const data = await response.json();
    
    return data 
}
button.onclick= function(){
    if(book.value==""){
        console.log("empty fields")
    }
    else{
        
        const res=book_k(book.value);
        res.then(response=>{
  
        
        
            display.innerHTML=response.data;
        });
        
  
  
    }
  
  }
/* const addtask=async(lat,lon,date,username,heading)=>{
    const response=await fetch('http://localhost:3000/dashboard/addtask',{
        method: "POST", // or 'PUT'
        headers: {
            //'Accept': 'application/json',
          "Content-Type": "application/json",
          //'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({lat,lon,date,username,heading})
    });
    const data = await response.json();
    
    return data 
}
const heading=async(username)=>{
    const response=await fetch('http://localhost:3000/dashboard/headings',{
        method: "POST", // or 'PUT'
        headers: {
            //'Accept': 'application/json',
          "Content-Type": "application/json",
          //'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({username})
    });
    const data = await response.json();
    
    return data 
} */




/* window.onload = (event) => { 

    add_task.onclick=function(){
        navigator.geolocation.getCurrentPosition((position) => {
            // Get the user's latitude
            const lat = position.coords.latitude;
          
            // Get the user's longitude
            const lon = position.coords.longitude;
          
            // Do something with the latitude and longitude
            const d = new Date();
            let heading = prompt("Please enter heading of new task:");
            if (heading != null && heading != "") {
                addtask(lat,lon,date,username,add_task.innerText).then((res)=>{window.location.assign(".");console.log(res.data)})
            }
          });
        
         
    } */



        
    
    
    
   
 /*    heading(username).then((res)=>{
        const topics=res.arr
        for(let i=0;i<topics.length;i++){
        
        
            const para = document.createElement("p");
            const div = document.createElement("div");
            div.id="obj"
            div.setAttribute('onclick',`window.location.assign("./task.html?q=${i+1}")`)
            const text=document.createTextNode(topics[i]);
            text.id='txt'
            div.appendChild(text)
            list.appendChild(div)
            list.appendChild(para)
    
           
            
        }
    }) */
    /* for(let i=0;i<5;i++){
        
        
        const para = document.createElement("p");
        const div = document.createElement("div");
        div.id="obj"
        div.setAttribute('onclick',`window.location.assign("./task.html?q=${i+1}")`)
        const text=document.createTextNode(topic);
        text.id='txt'
        div.appendChild(text)
        list.appendChild(div)
        list.appendChild(para)

       
        
    } 
    


    
    

  };*/



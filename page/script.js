const u_name=document.getElementById("name");
const password=document.getElementById("password");
const button=document.getElementById("button");
const login=async (name,password) => {
    
    const response=await fetch('http://localhost:3000/login',{
        method: "POST", // or 'PUT'
        headers: {
            //'Accept': 'application/json',
          "Content-Type": "application/json"
          //'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({name,password})
      });
    const data = await response.json();
    
    return data 
}
button.onclick= function(){
  if(u_name.value==""||password.value==""){
      console.log("empty fields")
  }
  else{
      
      const res=login(u_name.value,password.value);
      res.then(response=>{

        if(u_name.value==""||password.value==""){
          console.log("empty fields")
      }
      else{window.location.assign("/dashboard.html?u_name="+response.data);}
          
          
      });
      


  }

}
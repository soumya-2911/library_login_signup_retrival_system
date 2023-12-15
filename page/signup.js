const u_name=document.getElementById("name");
const password=document.getElementById("password");
const button=document.getElementById("button");
const signup=async (name,password) => {
    
    const response=await fetch('http://localhost:3000/signup',{
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
      
      const res=signup(u_name.value,password.value);
      res.then(response=>{

      
      
          window.location.assign("/index.html");
      });
      


  }

}
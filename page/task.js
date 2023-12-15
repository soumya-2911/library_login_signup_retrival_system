let params = new URL(document.location).searchParams;
let identity = params.get("q");

const get_weather_data=async()=>{
    const response=await fetch('http://localhost:3000/dashboard/weather',{
        method: "POST", // or 'PUT'
        headers: {
            //'Accept': 'application/json',
          "Content-Type": "application/json",
          //'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({})
    });
    const data = await response.json();
    
    return data 
}

const get_content=async(username,identity)=>{
    const response=await fetch('http://localhost:3000/dashboard/contents',{
        method: "POST", // or 'PUT'
        headers: {
            //'Accept': 'application/json',
          "Content-Type": "application/json",
          //'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({username,identity})
    });
    const data = await response.json();
    
    return data 
}

window.onload = (event) => {

    
}
let apikey="5f4215f2057232b9fe90480e945af132";
let weatherURL="";
async function myFunction(){
let city=document.getElementById("city").value;
weatherURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  
    let result=await fetch(weatherURL);  
    let users=await result.json();
    let{name,main:{temp_min,temp_max}}=users;
    
    document.getElementById("name").innerHTML=`<h1> Name of the City: ${name}</h1>`;
    document.getElementById("max_temp").innerHTML=`Maximum Temperature : ${temp_max}°C`;
    document.getElementById("min_temp").innerHTML=`Minimum Temperature : ${temp_min}°C`;
}

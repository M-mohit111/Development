document.querySelector('button').addEventListener('click',()=>{
    const cityname = document.getElementById("location").value;
    
    const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=439df9ac15ae4db6ad6121401250711&q=${cityname}&aqi=yes`);

    function displayweather(data){
        const a = document.getElementById("weatherinfo");
        a.innerHTML = data.current.temp_c;
    }

    promise.then((resp)=>{
        return resp.json();
    }).then((data)=>{
        displayweather(data);
    })

})
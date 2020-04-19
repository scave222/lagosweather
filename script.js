$(document).ready(function(){

    // $('.name')
    // $('.desc')
    // $('.temp')

    
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=6b09687e33803d273068dd95d903c484&lang=en&units=metric")
    .then(resp => resp.json())
    .then(data =>{
        // let inputs = data[0];
        $('.name').html(data.name);
        $('.country').html(data.sys.country);
        $('.condition').html(data.weather[0].main);
        $('.desc').html(data.weather[0].description);
        $('.temp').html(`${data.main.temp}°C`);
        $('.lat').html(`Lat ${data.coord.lat}`);
        $('.lon').html(`Lon ${data.coord.lon}`);

    })

      });
    
    
    
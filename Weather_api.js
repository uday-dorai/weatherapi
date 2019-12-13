let request = require('request');

let rl = require('readline');
let prompts = rl.createInterface(process.stdin,process.stdout);
prompts.question('Enter a city:',function(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=df2f71948d37bc9dfb0bb0dabb83b16e`;

    request(url, function (err, response, body) {
        if(err){
          console.log('error:', error);
        } else {
          //console.log('body:', body);
          let weather = JSON.parse(body);
          let celsius = ((weather.main.temp) - 32)*5/9;
          console.log(`City: ${weather.name},${weather.sys.country}`);
          console.log(`Temperature: ${celsius} degrees celsius`);
          console.log(`Humidity ${weather.main.humidity}`);
        }
      }); 
}); 

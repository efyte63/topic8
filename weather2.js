let request = require('request');

let apiKey = '0954ac77ba212299a73935dba3e3ae91';
let location = 'melbourne,Australia';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&untits=metric`
request(url, function (err, response, body) {
if(err){
    console.log('error:', error);
} else {
    console.log('body:', body);
}
});
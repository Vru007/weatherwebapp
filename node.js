const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const https=require("https");

app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){

    const url="https://api.openweathermap.org/data/2.5/weather?q=banglore&appid=1ecfe26938aa178c7a7a19dfe21d8cc3"

    https.get(url,function(response){
        response.on("data",function(data)
        {
            const weatherData=JSON.parse(data)
            console.log(weatherData)
        })
    })

    res.send("server is up")
})
app.use(express.static(__dirname+'public'))
app.listen(1550,function()
{
    console.log("server started at 1550: ");
})
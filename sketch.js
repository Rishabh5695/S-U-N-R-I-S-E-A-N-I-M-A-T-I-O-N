const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var hour
var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg)
    }

    Engine.update(engine);

    // write code to display time in correct format here
    fill("#6f4518")
    textSize(30)
    if(hour>=12){
        text("Time: "+hour%12+"pm",50,100)
    }
    else if(hour===0){
        text("Time:12am",50,100)
    }
else {
    text("Time: "+hour+"am",50,100)
}
}

async function getBackgroundImg(){
var responce=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    // write code to fetch time from API

    //change the data in JSON format
    var responcejson=await responce.json()
    var datetime=responcejson.datetime
     hour=datetime.slice(11,13)
    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset
if(hour>=04&&hour<=06){
    bg="sunrise1.png"
}
else if(hour>=06&&hour<=08){
    bg="sunrise2.png"
}
else if(hour>=08&&hour<=11){
    bg="sunrise3.png"
}
else if(hour>=11&&hour<=13){
    bg="sunrise4.png"
}
else if(hour>=13&&hour<=15){
    bg="sunrise5.png"
}
else if(hour>=15&&hour<=17){
    bg="sunrise6.png"
}
else if(hour>=17&&hour<=19){
    bg="sunset7.png"
}
else if(hour>=19&&hour<=20){
    bg="sunset8.png"
}
else if(hour>=20&&hour<=21){
    bg="sunset9.png"
}
else if(hour>=21&&hour<=22){
    bg="sunset10.png"
}
else if(hour>=22&&hour<=23){
    bg="sunset11.png"
}
else if(hour>=23&&hour<=00){
    bg="sunset12.png"
}
else {
bg="sunset12.png"
}
    

   //load the image in backgroundImg variable here
backgroundImg=loadImage(bg)
}

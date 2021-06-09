const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
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


}

async function getBackgroundImg(){

    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responseJSON= await response.json(); 
   var datetime= responseJSON.datetime;
   console.log(datetime)
   var hour = datetime.slice(11,13)

   //from 6AM TO 6PM
   if(hour>=04 && hour<=18){
      bg="sunrise1.png"
   }
   else{
       bg="sunset12.png"
   }

   backgroundImg=loadImage(bg)
   

}

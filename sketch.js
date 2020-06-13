const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle;
var turn = 0;
var gamestate = "play";

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("500",25,530);
 text("500",105,530);
 text("500",185,530);
 text("500",255,530);
 text("200",335,530);
 text("200",435,530);
 text("200",515,530);
 text("100",595,530);
 text("100",675,530);
 text("100",755,530);
 text("100",835,530);
  Engine.update(engine);
 
 // console.log(particles);
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
    for (var j = 0; j < particles.length; j++) {
   
      particles[j].display();
    }

 
   for (var k = 0; k < divisions.length; k++) {  

     
     divisions[k].display();
   }
   if(particle!=null){
     particle.display();
     if(particle.body.position.y>760){
       if(particle.body.position.x<300){
         score = score+500;
         particle = null;
         if(turn>=5) gamestate = "end";
       }
     }
   }
   if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>300&&particle.body.position.x<600){
        score = score+200;
        particle = null;
        if(turn>=5) gamestate = "end";
      }
    }
  }
  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>600&&particle.body.position.x<900){
        score = score+100;
        particle = null;
        if(turn>=5) gamestate = "end";
      }
    }
  }
  if(gamestate === "end"){
    textSize(100)
    text("GameOver",100,400);
  }
   
}

function mousePressed(){
  if(gamestate === "play"){
    turn++;
    particle = new Particle(mouseX,10,10);
    
  // particles.push(new Particle(mouseX,10,10));
   //particles = null;
  }
}
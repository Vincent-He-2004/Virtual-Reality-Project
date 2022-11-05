let scene, a=0, b=0;
let clone, teleportation;
let swords = [];
window.onload = function(){
  scene = document.querySelector("a-scene"); 
  camera = document.querySelector("#rig");
  modern = document.querySelector("#modern");
  mundane = document.querySelector("#mundane");
  divine = document.querySelector("#divine");
  voids = document.querySelector("#voids");
  pedistal = document.querySelector("#pedistal");
  crystal1 = document.querySelector("#tCrystal");
  crystal2 = document.querySelector("#tCrystal2");
  crystal3 = document.querySelector("#tCrystal3");
  crystal4 = document.querySelector("#tCrystal4");
  ring = document.querySelector("#ring");
  portal11 = document.querySelector("#portal11");
  portal12 = document.querySelector("#portal12");
  portal13 = document.querySelector("#portal13");
  portal14 = document.querySelector("#portal14");
  portal15 = document.querySelector("#portal15");
  sound = document.querySelector("#soundPlayer");
  sound1 = document.querySelector("#soundPlayer1");
  sound2 = document.querySelector("#soundPlayer2");
  sound3 = document.querySelector("#soundPlayer3");
  sound4 = document.querySelector("#soundPlayer4");
  sound5 = document.querySelector("#soundPlayer5");
  sound6 = document.querySelector("#soundPlayer6");
  sound7 = document.querySelector("#soundPlayer7");


  mundane.addEventListener("click", function(){
    camera.setAttribute("position", {x:-10000, y:-999, z:0});
    sound.components.sound.playSound();
  })

  divine.addEventListener("click", function(){
    camera.setAttribute("position", {x:-10000, y:1001, z:0});
  })

  voids.addEventListener("click", function(){
    camera.setAttribute("position", {x:-10000, y:-1000, z:2750});
  })

  portal11.addEventListener("click", function(){
    camera.setAttribute("position", {x:0, y:0, z:0});
  })

  portal12.addEventListener("click", function(){
    camera.setAttribute("position", {x:0, y:0, z:0});
  })

  portal13.addEventListener("click", function(){
    camera.setAttribute("position", {x:0, y:0, z:0});
  })
  
  portal15.addEventListener("click", function(){
    camera.setAttribute("position", {x:0, y:0, z:0});
  })

  portal14.addEventListener("click", function(){
    camera.setAttribute("position", {x:-10015, y:-1250, z:103});
  })

  


  //Element Stones
  elementFire = document.querySelector("#fire"); 
  elementWater = document.querySelector("#water");
  elementEarth = document.querySelector("#earth");
  elementAir = document.querySelector("#air");

  //Flying Swords
  /*for(let x = -30; x < 10; x+=1.75){
    for(let z = -75; z < 10; z+=1.75){
      let speed = rnd(5,10) / 10;
      let r = new Sword(x,50,z, speed);
      swords.push(r);
    }
  }*/
  
  //teleport Click On
  
  /*modern.addEventListener("click", function(){
    camera.setAttribute("position", {x:0, y:1, z:0});
  });*/




  element();
  flyingSword();
  divineSpin();
  

}






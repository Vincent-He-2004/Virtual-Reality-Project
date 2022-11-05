function element(){
  a += .75;
  elementFire.setAttribute("rotation",{x:0, y:a, z:0});
  elementWater.setAttribute("rotation",{x:0, y:a, z:0});
  elementEarth.setAttribute("rotation",{x:0, y:a, z:0});
  elementAir.setAttribute("rotation",{x:0, y:a, z:0});


  setTimeout(element,10);
  

}

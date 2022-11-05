class Soul{
  constructor(){
  this.obj = document.createElement("a-entity");

  let body = document.createElement("a-dodecahedron");
  body.setAttribute("position",{x:0, y:0, z:0});
  body.setAttribute("radius",.22);
  body.setAttribute("color","red");
  this.obj.append(body);

  let flame = document.createElement("a-sphere");
  flame.setAttribute("position",{x:0, y:0, z:0});
  flame.setAttribute("color","black");
  flame.setAttribute("radius",.187);
  this.obj.append(flame);

  let flame2 = document.createElement("a-torus");
  flame2.setAttribute("position",{x:0, y:0, z:0});
  flame2.setAttribute("color","black");
  flame2.setAttribute("radius",.3);
  flame2.setAttribute("radius-tubular",.0035);
  this.obj.append(flame2);

  let flame3 = document.createElement("a-torus");
  flame3.setAttribute("position",{x:0, y:0, z:0});
  flame3.setAttribute("rotation",{x:0, y:90, z:0});
  flame3.setAttribute("color","black");
  flame3.setAttribute("radius",.3);
  flame3.setAttribute("radius-tubular",.0035);
  this.obj.append(flame3);

  let flame4 = document.createElement("a-torus");
  flame4.setAttribute("position",{x:0, y:0, z:0});
  flame4.setAttribute("rotation",{x:90, y:0, z:0});
  flame4.setAttribute("color","black");
  flame4.setAttribute("radius",.3);
  flame4.setAttribute("radius-tubular",.0035);
  this.obj.append(flame4);

  let flame5 = document.createElement("a-torus");
  flame5.setAttribute("position",{x:0, y:0, z:0});
  flame5.setAttribute("rotation",{x:-45, y:0, z:0});
  flame5.setAttribute("color","black");
  flame5.setAttribute("radius",.3);
  flame5.setAttribute("radius-tubular",.0035);
  this.obj.append(flame5);

  let flame6 = document.createElement("a-torus");
  flame6.setAttribute("position",{x:0, y:0, z:0});
  flame6.setAttribute("rotation",{x:45, y:0, z:0});
  flame6.setAttribute("color","black");
  flame6.setAttribute("radius",.3);
  flame6.setAttribute("radius-tubular",.0035);
  this.obj.append(flame6);

  let flame7 = document.createElement("a-torus");
  flame7 .setAttribute("position",{x:0, y:0, z:0});
  flame7 .setAttribute("rotation",{x:0, y:45, z:0});
  flame7 .setAttribute("color","black");
  flame7 .setAttribute("radius",.3);
  flame7 .setAttribute("radius-tubular",.0035);
  this.obj.append(flame7 );

  let flame8 = document.createElement("a-torus");
  flame8.setAttribute("position",{x:0, y:0, z:0});
  flame8.setAttribute("rotation",{x:0, y:-45, z:0});
  flame8.setAttribute("color","black");
  flame8.setAttribute("radius",.3);
  flame8.setAttribute("radius-tubular",.0035);
  this.obj.append(flame8);




  scene.append(this.obj);
  }
  
  move(x,y,z){
    this.obj.setAttribute("position", {x:x,y:y,z:z});
  }
  scale(size){
    this.obj.setAttribute("scale", {x:size,y:size,z:size});
  }

}
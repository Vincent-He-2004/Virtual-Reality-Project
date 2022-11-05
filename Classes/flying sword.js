class Sword{
  constructor(x,y,z,speed){
    this.x = x;
    this.z = z;
    this.y = y;
    this.speed = speed;  
    this.obj = document.createElement("a-entity");

    let body = document.createElement("a-cylinder");
    body.setAttribute("position", {x:0, y:0, z:0});
    body.setAttribute("rotation", {x:0, y:0, z:90});
    body.setAttribute("color", "black");
    body.setAttribute("height", 2);
    body.setAttribute("radius", 0.1);
    this.obj.append(body);


    let head = document.createElement("a-cone");
    head.setAttribute("position", {x:1.5, y:0, z:0});
    head.setAttribute("rotation", {x:0, y:0, z:90});
    head.setAttribute("color", "red");
    head.setAttribute("radius-bottom", .001);
    head.setAttribute("radius-top", .15);
    this.obj.append(head);

    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})

    scene.append(this.obj);

  }

  move(){
    this.x += this.speed;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z})
  }
  scale(size){
    this.obj.setAttribute("scale", {x:size,y:size,z:size});
  }
}

function flyingSword(){
  for(let sword of swords){
    sword.move();
    if (sword.x > 100){
      sword.x = -100;
    }
  }

  setTimeout(flyingSword,10);
}

class Tree{
  constructor(){
    this.obj = document.createElement("a-entity");

    let trunk = document.createElement("a-cylinder");
    trunk.setAttribute("position",{x:0,y:0,z:0});
    trunk.setAttribute("color","black");
    trunk.setAttribute("radius",.35);
    trunk.setAttribute("height",2);
    this.obj.append(trunk);

    let top1 = document.createElement("a-cone");
    top1.setAttribute("position",{x:0,y:.5,z:0});
    top1.setAttribute("height",1);
    top1.setAttribute("color","green");
    this.obj.append(top1);

    let top2 = document.createElement("a-cone");
    top2.setAttribute("position",{x:0,y:1,z:0});
    top2.setAttribute("height",1);
    top2.setAttribute("color","green");
    this.obj.append(top2);

    scene.append(this.obj);
  }
  move(x,y,z){
    this.obj.setAttribute("position", {x:x,y:y,z:z});
  }
  scale(size){
    this.obj.setAttribute("scale", {x:size,y:size,z:size});
  }
}
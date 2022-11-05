function divineSpin(){
  a+=1;
  b+=-5;
  crystal1.setAttribute("rotation",{x:0, y:a, z:0});
  crystal2.setAttribute("rotation",{x:0, y:a, z:0});
  crystal3.setAttribute("rotation",{x:0, y:a, z:0});
  crystal4.setAttribute("rotation",{x:0, y:a, z:0});
  portal11.setAttribute("rotation",{x:0, y:0, z:b});
  portal12.setAttribute("rotation",{x:0, y:90, z:b});
  portal13.setAttribute("rotation",{x:0, y:0, z:b});
  portal14.setAttribute("rotation",{x:0, y:90, z:b});
  portal15.setAttribute("rotation",{x:0, y:0, z:b});
  ring.setAttribute("rotation",{x:90, y:0, z:a});

  setTimeout(divineSpin,10);
}

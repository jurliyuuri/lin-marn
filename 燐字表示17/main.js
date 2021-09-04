var linzi1 = new Image();
linzi1.src = "img1.png";

function draw(t,  linzi, id, s1, s2, proportion, offsetx, offsety, bordered) {
  proportion = proportion || 1;
  offsetx = offsetx || 0;
  offsety = offsety || 0;
  var canvas = document.getElementById(id);
  if ( ! canvas || ! canvas.getContext ) { return false; }
  var ctx = canvas.getContext('2d');


  var w = 170;
  var h = w;

  ctx.drawImage(linzi, 
    t[0][0] + t[0][1]*s1 + t[0][2]*s2 + (bordered ? 0 : 5),
    t[1][0] + t[1][1]*s1 + t[1][2]*s2 + (bordered ? 0 : 5),
    w, h, offsetx, offsety, w*proportion, h*proportion);

}

var socket;


function setup() {
    createCanvas(600, 600);
    strokeWeight(4);
    line(200, 0, 200, 600);
    line(400, 0, 400, 600);
    line(0, 200, 600, 200);
    line(0, 400, 600, 400);
    

    socket = io.connect()
    socket.on('mouse', newDrawing);
  }

  function newDrawing(data) {

    
    noStroke();
    fill(136, 39, 238);
    ellipse(data.x, data.y, 20, 20);

  }

  function mouseDragged() {
    console.log('Sending: ' + mouseX + ',' + mouseY);

    var data = {
      x: mouseX,
      y: mouseY
    }

    socket.emit('mouse', data);

    noStroke();
    fill (211, 169, 255);
    ellipse(mouseX, mouseY, 20, 20);
  }

  function draw() {

  }
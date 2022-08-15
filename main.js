var canvas = new fabric.Canvas("myCanvas");

  blockImageWidth = 30;
  blockImageHeight = 30;

  playerX = 10;
  playerY = 10;

var playerObject = "";
var blockImageObject = "";

function playerUpdate() {

   fabric.Image.fromURL("player.png", function(Img){

        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(150);

        playerObject.set({

            top: playerY,
            left: playerX
        });
         canvas.add(playerObject);

   }) 
}

function newImage(getImage) {

    fabric.Image.fromURL(getImage, function (Img) {
        
        blockImageObject = Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);

        blockImageObject.set({

            top: playerY,
            left: playerX 
        });

        canvas.add(blockImageObject);
    })   
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == "80") {
        
        console.log("P e Shift Presionado Juntos pra aumentar a imagem");
        blockImageWidth = blockImageWidth + 10;
        blockImageHeight = blockImageHeight +10;

        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;

    }

    if (e.shiftKey && keyPressed =="77") {
        
        console.log("M e Shift Presionado Juntos pra diminuir a imagem");
        blockImageWidth = blockImageWidth - 10;
        blockImageHeight = blockImageHeight - 10;

        document.getElementById("currentWidth").innerHTML = blockImageWidth;
        document.getElementById("currentHeight").innerHTML = blockImageHeight;
    }

    if (keyPressed == "38") {
        
        up();
        console.log("Seta pra Cima")
    }

    if (keyPressed == "40") {
        
        down();
        console.log("Seta pra Baixo")
    }

    if (keyPressed == "37") {
        
        left();
        console.log("Seta pra Esquerda")
    }

    if (keyPressed == "39") {
        
        right();
        console.log("Seta pra Direita")
    }

    if (keyPressed == "87") {
        
        newImage("wall.jpg");
        console.log("Tecla W")
    }

    if (keyPressed == "71") {
        
        newImage("ground.png");
        console.log("Tecla G")
    }

    if (keyPressed == "76") {
        
        newImage("light_green.png");
        console.log("Tecla L")
    }

    if (keyPressed == "84") {
        
        newImage("trunk.jpg");
        console.log("Tecla T")
    }

    if (keyPressed == "82") {
        
        newImage("roof.jpg");
        console.log("Tecla R")
    }

    if (keyPressed == "89") {
        
        newImage("yellow_wall.png");
        console.log("Tecla Y")
    }

    if (keyPressed == "68") {
        
        newImage("dark_green.png");
        console.log("Tecla D")
    }

    if (keyPressed == "85") {
        
        newImage("unique.png");
        console.log("Tecla U")
    }

    if (keyPressed == "67") {
        
        newImage("cloud.jpg");
        console.log("Tecla C")
    }
    
}

function up() {
    
    if (playerY >= 0) {
        
        playerY = playerY - blockImageHeight;
        console.log("Altura da do Bloco = " + blockImageHeight);
        console.log("Quando a tecla para cima for pressionada, X = " + playerX, "Y = " + playerY);
        
        canvas.remove(playerObject);
        playerUpdate();

    }
}

function down() {
    
    if (playerY <= 500) {
        
        playerY = playerY + blockImageHeight;
        console.log("Altura da do Bloco = " + blockImageHeight);
        console.log("Quando a tecla para cima for pressionada, X = " + playerX, "Y = " + playerY);
        
        canvas.remove(playerObject);
        playerUpdate();

    }
}

function left() {
    
    if (playerX > 0) {
        
        playerX = playerX - blockImageWidth;
        console.log("Largura do Bloco = " + blockImageWidth);
        console.log("Quando a tecla para esquerda for pressionada, X = " + playerX, "Y = " + playerY);
        
        canvas.remove(playerObject);
        playerUpdate();

    }
}

function right() {
    
    if (playerX <= 850) {
        
        playerX = playerX + blockImageWidth;
        console.log("Largura do Bloco = " + blockImageWidth);
        console.log("Quando a tecla para direita for pressionada, X = " + playerX, "Y = " + playerY);
        
        canvas.remove(playerObject);
        playerUpdate();

    }
}

function clearArea() {
    
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height)
    
}
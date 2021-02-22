var canvas;

var edges;

var music;

var rect1, rect2, rect3, rect4;

var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    rect1 = createSprite(100, 550, 170, 30);
    rect1.shapeColor = "blue";

    rect2 = createSprite(300, 550, 170, 30);
    rect2.shapeColor = "red";

    rect3 = createSprite(500, 550, 170, 30);
    rect3.shapeColor = "purple";

    rect4 = createSprite(700, 550, 170, 30);
    rect4.shapeColor = "green";

    box = createSprite(400,50,40,40);
    box.shapeColor = "white";
    box.velocityX = 2;
    box.velocityY = 2;
    box.x = Math.round(random(20,750));

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    box.bounceOff(edges);
    drawSprites();
    music.play();
    //add condition to check if box touching surface and make it bounce


    if (istouching(box, rect1) === true) {
       box.shapeColor = rect1.shapeColor;
       bounce2(box,rect1);
    }

    if (istouching(box, rect2) === true) {
        box.shapeColor = rect2.shapeColor;
        bounce2(box,rect2);
     }

     if (istouching(box, rect3) === true) {
        box.shapeColor = rect3.shapeColor;
        bounce2(box,rect3);
     }


     if (istouching(box, rect4) === true) {
        box.shapeColor = rect4.shapeColor;
        bounce2(box,rect4);
     }

}

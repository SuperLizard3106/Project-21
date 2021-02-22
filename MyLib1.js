function istouching(shape1, shape2) {
    if (shape2.y - shape1.y < shape2.height/2 + shape1.height/2 && shape2.x - shape1.x < shape2.width/2 +shape1.width/2) {
        
        return true;
    }
    else {
        
        return false;
    }

}

function bounce2(shape1, shape2) {
    if (shape2.isTouching(shape1)) {
     
        shape1.velocityY = shape1.velocityY*(-1);      
    }

}
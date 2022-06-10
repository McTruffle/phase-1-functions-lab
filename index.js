// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    
    let num = blocks - 42;
    
    if (num > 0) {
        
    }
    else {
          num = (num +- num*2);
          
    };



    return num;


}

function distanceFromHqInFeet(blocks) {
    let block = distanceFromHqInBlocks(blocks);
    let feet = block * 264;
    return feet;
};



function distanceTravelledInFeet (dis1, dis2) {
    let travel = (dis2 - dis1) * 264;
    if ( travel > 0) {
    }
    else {
        travel = (dis1 - dis2) *264;
    }

    let feet = travel;
    return feet;
};

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    if (distance < 400 ) {
        return 0;
    }
    else if (distance > 400 && distance < 2000 ) {
        return (distance - 400) *.02;
    }
    else if (distance > 2000 && distance < 2500) {
        return 25;
    }
    else {
        return "cannot travel that far";
    }
}


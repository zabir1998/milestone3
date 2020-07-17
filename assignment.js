//feetToMile

function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}

//woodCalculator

function woodCalculator(chair, table, bed){
    var chairWood = chair * 1;
    var tableWood = table * 2;
    var bedWood = bed * 3;
    return totalWood = chairWood + tableWood + bedWood;
}

//brickCalculator

function brickCalculator(floor){
    if(floor <= 0){
        return 'undefined';
     }
    if(floor > 0 && floor <= 10){
        return floor * 15 * 1000;
    }
    else if(floor > 10 && floor <= 20){
        return 10 * 15 * 1000 + (floor - 10) * 12 * 1000;
    }
    else{
        return 10 * 15 * 1000 + 10 * 12 * 1000 + (floor - 20) * 10 * 1000;
    }
}

//tinyFriend

function tinyFriend(friends) {
    var smallest = friends[0];
    for(var i = 0; i < friends.length; i++){
        var selectedFriend = friends[i];
        if(selectedFriend.length < smallest.length){
            smallesst = selectedFriend;
        }
    }
    console.log("Tiniest Friend is: ", smallest);
}


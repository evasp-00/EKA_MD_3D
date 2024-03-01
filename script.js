var world = document.getElementById("world");

var velocity = 5;
var forward = 0;
var backward = 0;
var left = 0;
var right = 0;

var map = [
            [0,100,0,90,0,0,2000,2000,"#555555"],
            [0,0,-1000,0,0,0,2000,200,"#FF0000"],//prieksaa siena
            [0,0,1000,0,0,0,2000,200,"#FF0000"], // siena aizmugure
            [1000,0,0,0,90,0,2000,200,"#FFFF00"],//laba siena
            [-1000,0,0,0,90,0,2000,200,"#FF00FF"],
            [500,-600,0,90,45,0,1414.2,2000,"#84ff00"],
            [-500,-600,0,90,-45,0,1414.2,2000,"#003cff"]
];

function player(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
}

var pawn = new player(0,0,0);

function update(){
    let dx = left - right;
    //pawn.y = up - down;
    let dz = forward - backward;

    pawn.x += dx;
    pawn.z += dz;

    //console.log(pawn.x);

    console.log(pawn.z);
    world.style.transform = `translate3d(${pawn.x}px, 0px, ${pawn.z}px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
}

function createWorld(){
    for(let i = 0; i < map.length; i++){
        let newElement = document.createElement("div");
        newElement.className = "square";
        newElement.id = "square" + i;
        newElement.style.width = `${map[i][6]}px`;
        newElement.style.height = `${map[i][7]}px`;
        newElement.style.background = map[i][8];
        newElement.style.transform = 
        `translate3d(${600-map[i][6]/2 + map[i][0]}px, 
                     ${400-map[i][7]/2 + map[i][1]}px, 
                     ${map[i][2]}px) 

        rotateX(${map[i][3]}deg) 
        rotateY(${map[i][4]}deg) 
        rotateZ(${map[i][5]}deg)`;
    
        world.append(newElement);
    }
}

createWorld();

timerGame = setInterval(update, 10)
const tower_1 = document.getElementById("tower_1");
const disk_1 = document.getElementById("disk1");
const disk_2 = document.getElementById("disk2");
const disk_3 = document.getElementById("disk3");
const disk_4 = document.getElementById("disk4");
const tower_2 = document.getElementById("tower_2");
const tower_3 = document.getElementById("tower_3");
let towers = document.querySelectorAll(".tower");

let playerMode = "Pickup";
let hold = null;


for (var i = 0; i < towers.length; i++) {
    towers[i].addEventListener('click', isPickupIsputToDestinationTower);
}

function isPickupIsputToDestinationTower(event) {
    console.log(playerMode);
    if (playerMode === "Pickup") {
        pickFromSourceTower(event.currentTarget);
    } else if (playerMode === "Release") {
        putToDestinationTower(event.currentTarget);
    }
}


const pickFromSourceTower = function (initalDiv) {
    let numberOfDivs = initalDiv.childElementCount;
    console.log(numberOfDivs);
    if (numberOfDivs === 0) {
        alert("This tower is empty, Click another tower");
    } else {
        hold = initalDiv.lastElementChild;
        playerMode = "Release"
    }
    win();
}

const putToDestinationTower = function (lastDiv) {
    let lastElement = lastDiv.lastElementChild;
    if (!lastElement) {
        lastDiv.appendChild(hold);
        playerMode = "Pickup"
    } else {
        let currentDiskWidth = lastElement.clientWidth;
        let playerHoldDisk = hold.clientWidth;
        if (currentDiskWidth <= playerHoldDisk) {
            alert("NO NO NO! Disk too big, try another tower.")
            playerMode = "Pickup"
        } else {
            lastDiv.appendChild(hold);
            playerMode = "Pickup"
        }
    }
    win();
}

const win = function () {
    if (tower_1.childElementCount === 0 && tower_3.childElementCount === 4) {
        alert('You Won')
    }
}
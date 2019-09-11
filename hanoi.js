const tower_1 = document.getElementById("tower_1");
const disk_1 = document.getElementById("disk1");
const disk_2 = document.getElementById("disk2");
const disk_3 = document.getElementById("disk3");
const disk_4 = document.getElementById("disk4");
const tower_2 = document.getElementById("tower_2");
const tower_3 = document.getElementById("tower_3");

const main = function () {
    tower_1.addEventListener('click', function () {
        console.log("Tower 1");
    });
    tower_2.addEventListener('click', function () {
        console.log("Tower 2");
    });
    tower_3.addEventListener('click', function () {
        console.log("Tower 3");
    });
}

main();
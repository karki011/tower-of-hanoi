

 const tower_move = function (nDisk, start, destination, middle) {
     if( nDisk === 1){
        console.log(`Move disk ${nDisk} ${start} - ${destination}`);
     } else {
        tower_move(nDisk-1, start, middle, destination)
        console.log(`Move disk ${nDisk } ${start}  -  ${destination}`);
        tower_move(nDisk-1, middle, destination, start)
     }
 }
 
tower_move(3, "A", "C", "B");

 

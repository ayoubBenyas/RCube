import Rubik from './rubik.js';
import App from './app.js';


var rubik = new Rubik;
var app = new App;
app.add( rubik );
document.querySelector("#main").appendChild( app.domElement );
app.animate();


    /*
var moves = ["U", "R", "U'", "R'"];
moves.forEach(move => {
    app.moveHandler( move); 
});
*/

var set = {
        83  :   '0' ,
        85  :   'U' ,
        68  :   'D' ,
        82  :   'R' ,
        76  :   'L' ,
        70  :   'F' ,
        66  :   'B' ,
        88  :   'X' ,
        89  :   'Y' ,
        90  :   'Z' 
    };

$(document).keydown((event)=>{
    if(!event.ctrlKey && set[event.keyCode] !== undefined  ){
        app.moveHandler( set[event.keyCode] + ( ( event.shiftKey)? "'": "")); 
    }

});        
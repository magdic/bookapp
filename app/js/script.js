/*
**
** This script change the display mode for the 
** books, like Blocks or Grid list.
**
*/

var par = document.getElementById("displaying-list");
par.addEventListener("click",function(e){
	document.getElementById("books-containers").className = 'books grid-list';
},false);
var calder = document.getElementById("displaying-blocks");
calder.addEventListener("click",function(e){
	document.getElementById("books-containers").className = 'books';
},false);
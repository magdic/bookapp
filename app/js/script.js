/*
**
** This script change the display mode for the 
** books, like Blocks or Grid list.
**
*/

var setList = document.getElementById("displaying-list");
setList.addEventListener("click",function(e){
	document.getElementById("books-containers").className = 'books grid-list';
},false);
var setBlocks = document.getElementById("displaying-blocks");
setBlocks.addEventListener("click",function(e){
	document.getElementById("books-containers").className = 'books';
},false);
// var i =0;  
// console.log(i);  
// setInterval(function(){  
// i++;  
// console.log((i<10));  
// setTimeout(1000); 
// }, 1000);      

// var recursive = function () {  
//     console.log("Hey! 1000 millisecond completed!..");   
//     
// }   
function welcome () {  
    console.log("Welcome to JavaTpoint!");  
  }  
  var id1 = setTimeout(welcome,1000);  
  var id2 = setInterval(welcome,1000);  
  clearTimeout(id1);  
$(document).ready(function() {
   $('li').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('li').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('li').click(function() {
       $(this).toggle(1000);
   }); 
});
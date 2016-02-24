$(document).ready(function(){
  alert("hello world");
if(window.location.href=="http://www.sheldonyin.website/")
{
$("#sidebar").css({width:'100%'});
$("#btnblog").click(function(){
$("#sidebar").animate({width:'33.3333%'},'slow');
});
$("#btnabout").click(function(){
$("#sidebar").animate({width:'0'},'slow');
});
}
});

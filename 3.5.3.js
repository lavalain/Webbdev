$(document).ready(function(){

$('a[ href^="http://"]').attr('target','_blank'); 
// alla länkar som börjar med "http://" kommer att öppnas i en ny flik.

$("#navigation").navPlugin({
	'itemWidth': 150,
	'itemHeigth': 30
	'navEffect': 'slide';
	'speed':250

});
	





});
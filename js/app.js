"use strict";
angular.module('AngStarter', ['ngRoute']);

jQuery(document).ready(function($) {
	$(".scroll").click(function(event){     
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top - 350}, 500);
	});
});

$('.redWine').click(function(){
	$('.ng-scope').focus();
	$('.ng-scope').val('red');	
})
$('.whiteWine').click(function(){
	$('.ng-scope').focus();	
	$('.ng-scope').val('white');
})







/*Art*/




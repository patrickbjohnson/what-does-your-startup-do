$(document).ready(function(){
	var bullshit = ["test1", "test2", "test3", "test4", "test5", "test6", "test7", "test8", "test8", "test9", "test10", "test11", "test12", "test13", "test14", "test15", "test16", "test17"];
	console.log(bullshit[0], bullshit[1]);

	var number = bullshit[Math.floor(Math.random() * bullshit.length)];
	console.log(number);

	$('.main .bullshit').text(number);
});



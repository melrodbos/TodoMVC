(function (window) { //IIFE: Immediately invoke dfn expression
	'use strict';

	var list = [ ];

	console.log(list);



	// Your starting point. Enjoy the ride!

	window.todos = {
		"addTaskToList": addTaskToList,
		"completeTask": completeTask,
		"deleteTask": deleteTask,
	};

})(window);

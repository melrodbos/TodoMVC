(function (window) {
    'use strict'; // For bonus points what does this do?
// debugger;


    //  CONTROLLER FOR: I can ada a task to my list...
    //  1. What event should I be listening for? keydn, keyup, keypress
    //  2. what element makes since to listen for that event? input.new-todo
    //  3. What do I need to do when that event fires?

                    // one way to write the query selector
                        // document.querySelector('input.new-todo');
                        // .addEventListener('keydn', function addTodoController(){
                        // })
        var newTodoInput = document.querySelector('input.new-todo')


        // TO ADD NEW TASK:
        // GIVEN an HTML element <input class="new-todo">
        // WHEN the user types a task AND presses the "ENTER" key

        // newTodoInput.addEventListener('keyup', function(){ console.log(arguments);})
        newTodoInput.addEventListener('keyup', function addTodoController(event){
                if (event.keyCode === 13){// AND presses the "ENTER" key

                var task = document.querySelector('input.new-todo').value;
                todos.taskList.push(task);
                        document.querySelector('input.new-todo').value= "";

                    console.log(todos.taskList);

                    // THEN:
                    // DONE  Save the thing to remember (task) to the list of things to remember(taskList)
                    // DONE  Remove the things to remember(task) from the "what needs to be done?"box(input new todo)
                    // TODO  Update the number of tasks in the footer...
                    // TODO  Add a new task(ul.todo-list > li) to the list of tasks in the display (ul.todo-list)
                }


    }); // END addEventListner (addTodoController)

// function lookMaArguments(){ console.log(arguments);}
    // lookMaArguments();
    // lookMaArguments(1, 2, 3);
    // lookMaArguments('hello', 'clarise');
    // var element = document.querySelector('li');

/**        _.forEach(element, function(element, index, elements){
            element.addEventListener('click', function(){
                element.childElement.classList.toggle('checkbox');
            });
            });*/

})(window);












// //Copied the following documentation from the class repo (just in case I had any typos):
//
//
// //debugger;
// // (function (window) { // IIFE: Immediately Invoked Function Expression
// // 	'use strict'; // For bonus points, what does this do?
//
// 	// CONTROLLER FOR: I can add a task to my list...
// 	// 1. What event should I be listening for? keydn, keyup, keypress
// 	// 2. What element makes sense to listen for that event? input.new-todo
// 	// 3. What do I need to do when that event fires?
//
// // 	// GIVEN an HTML element <input class="new-todo">
// // 	var newTodoInput = document.querySelector('input.new-todo');
// //
// // 	// WHEN the user types a task
// // 	newTodoInput.addEventListener('keyup', function addTodoController(event){
// // 		if ( event.keyCode === 13 ){ // AND presses the "Enter" key
// // 			console.log('sanity check!');
// // 			// THEN:
// // 			// TODO Save the thing to remember (task) to the list of things to remember (taskList)
// // 			// TODO Remove the thing to remember (task) from the "What needs to be done?" box (input.new-todo)
// // 			// TODO Update the number of tasks in the footer...
// // 			// TODO Add a new task (ul.todo-list > li) to the list of tasks _in the display_ (ul.todo-list)
// // 		}
// // 	}); // END addEventListener(addTodoController)
// // })(window);
//
// //
// (function (window) { // IIFE: Immediately Invoked Function Expression
// 	'use strict'; // For bonus points, what does this do?
//
// var newTodoInput = document.querySelector('input.new-todo')
//
// // WHEN the user types a task
// newTodoInput.addEventListener('keyup', function addTodoController(event){
// 	if ( event.keyCode === 13 ){ // AND presses the "Enter" key
// 		var task = document.querySelector('inout.new-todo').value;
//
// 		todos.taskList.push(task);
//
// 		document.querySelector('input.new-todo').value = "";
// 		}
//
// 		console.log(todos.taskList);
// 		// THEN:
// 		// TODO Save the thing to remember (task) to the list of things to remember (taskList)
// 		// TODO Remove the thing to remember (task) from the "What needs to be done?" box (input.new-todo)
// 		// TODO Update the number of tasks in the footer...
// 		// TODO Add a new task (ul.todo-list > li) to the list of tasks _in the display_ (ul.todo-list)
// 	}); // END addEventListener(addTodoController)
//
// })(window);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // // My version:
// // (function (window) { //IIFE: Immediately invoke dfn expression
// // 	'use strict'; //what does this do??
// // 	debugger;
// // // CONTROLLER: I can add a task to my list...
// // // 1. What event shoul I be listening for? keydn, keyup, keypress
// // // 2. What element makes sense to isten to that event? input.new-todo
// // // 3.What do I need to do when that event fires?
// //
// // // GIVEN an HTML element <input class= "new-todo">
// // // addEventListener('keydn', function aNameInHere (){
// // var newTodoInput = document.querySelector('input.new-todo');
// //
// //
// //
// // // WHEN: the user types a task AND presses the "ENTER" key
// // // newTodoInput.addEventListener('keyup', function(){ console.log(arguments); });
// // // newTodoInput.addEventListener('keydn', function addTodoController (){
// // 	// TO ADD A NEW TASK:
// //
// //
// // 	// 1. Click on "What needs to be done?" (input class = "new-todo")
// // 	// 2. Type the task: "Remember the milk"
// // 	// 3. Press the :"Enter" key
// // 	// 4. ROBOT: Save the thing to remember ("task") to the list of things to remember (taskList)
// // 	// 5. ROBOT: Remove the thing to remember (task) from the "What needs to be done?" box ()
// // 	// 6. ROBOT: Update the number of tasks in the footer...
// // 	// 7. ROBOT: Add a new task (ul.todoList > li)to the list of tasks_in_the_display_(ul.toggle)
// //
//
//
// // }
//
// // // });

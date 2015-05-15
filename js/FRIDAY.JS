(function(window) {
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

    newTodoInput.addEventListener('keyup', function addTodoController(event) {

      if (event.keyCode === 13) { // AND presses the "ENTER" key

        var task = document.querySelector('input.new-todo').value;

        todos.taskList.push(task);

        document.querySelector('input.new-todo').value = "";

        console.log(todos.taskList);

        // THEN:
        // DONE  Save the thing to remember (task) to the list of things to remember(taskList)
        // DONE  Remove the things to remember(task) from the "what needs to be done?"box(input new todo)
        // TODO  Update the number of tasks in the footer...
        // TODO  Add a new task(ul.todo-list > li) to the list of tasks in the display (ul.todo-list)
      }
    }); // END addEventListner (addTodoController)



    // CONTROLLER FOR: I can DELETE a task from my list...
    // 1. What event should I be listening for?    Mouseover
    // 2. What element makes sense to listen for that event? (ul.todo-list)
    // 3. What do I need to do when that event fires?


// HOVER EVENT TO REMOVE THE X FROM THE LIST:
var deleteTask = document.querySelector('ul.todo-list');

deleteTask.addEventListner('mouseover', function() {

  console.log("hello");

});

var deleteTaskButton = document.querySelector('button.destroy')

deleteTaskButton.addEventListner('click', function(){

  console.log("Click should work");
});



    // CONTROLLER FOR: I can edit a task on my list...
    // 1. What event should I be listening for?
    // 2. What element makes sense to listen for that event?
    // 3. What do I need to do when that event fires?


    // CONTROLLER FOR: I can complete a task on my list...
    // 1. What event should I be listening for?
    // 2. What element makes sense to listen for that event?
    // 3. What do I need to do when that event fires?

    // CONTROLLER FOR: I can view the list...
    // 1. What event should I be listening for?
    // 2. What element makes sense to listen for that event?
    // 3. What do I need to do when that event fires?

  })(window);

(function(window) {
  'use strict'; // For bonus points what does this do?
  // })
  var newTodoInput = document.querySelector('input.new-todo');

  newTodoInput.addEventListener('keyup', function addTodoController(event) {
    if (event.keyCode === 13) { // AND presses the "ENTER" key

      var task = document.querySelector('input.new-todo').value;

      todos.taskList.push(task);

      document.querySelector('input.new-todo').value = "";

      //Update the number of task

  //  if (todos.taskList.length === 1) {
    //    return
  //  }

      console.log(todos.taskList);
    }


  }); // END addEventListner (addTodoController)

var deleteTask = document.querySelector('ul.todo-list');

deleteTask.addEventListner('mouseover', function() {

console.log("hello");

});




})(window);

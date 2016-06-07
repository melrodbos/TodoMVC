// From last Friday's lab session:
(function(window) {
  'use strict';


//Given an HTML element <input class = "new-todo>"
var newTodoInput = document.querySelector('input.new-todo')

newTodo.addEventListener('keyup', function addTodoController(event) {
  if (event.keycode !== 13) return;
    console.log("Show me what you got!")


  var task = newTodoInput.value,

  todoCountELement = document.querySelector('span.todo-count');

  todos.addTaskToList(task, todos.taskList);

  newTodoInput.value = "";

})
}

)
















// (function(window) {
//   'use strict'; // For bonus points what does this do?
//   // })
//   var newTodoInput = document.querySelector('input.new-todo');
//
//   newTodoInput.addEventListener('keyup', function addTodoController(event) {
//     if (event.keyCode === 13) { // AND presses the "ENTER" key
//
//       var task = document.querySelector('input.new-todo').value;
//
//       todos.taskList.push(task);
//
//       document.querySelector('input.new-todo').value = "";
//
//       //Update the number of task
//
//   //  if (todos.taskList.length === 1) {
//     //    return
//   //  }
//
//       console.log(todos.taskList);
//     }
//
//
//   }); // END addEventListner (addTodoController)
//
// var deleteTask = document.querySelector('ul.todo-list');
//
// deleteTask.addEventListner('mouseover', function() {
//
// console.log("hello");
//
// });
//
//
//
//
// })(window);

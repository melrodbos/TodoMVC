(function(window) {
 var taskList = [];

 function listTasks(list) {
 }

 function addTaskToList(task, list) {
   return list.push(task);
 }

 function deleteTask (task, list) {
   return list.splice(task, 1);
 }

 function completeTask(task, list) {
   return list[task - 1] += "COMPLETE";
 }

   window.todos = {
     "addTaskToList": addTaskToList,
     "deleteTask": deleteTask
     "completeTask": completeTask
   };
})(window);

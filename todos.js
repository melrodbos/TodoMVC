(function(window) {
 var taskList = [];

 function listTask(list){
 }

 function addTask(task, list){
   return list.push(task);
 }

 function deleteTask (position, list){
   return list.splice(position, 1);
 }

 function completeTask(task, list){
   return list.splice(task - 1, 1);
 }

   window.todos = {
     "taskList": taskList,
     "addTask": addTask,
     "deleteTask": deleteTask
     "completeTask": completeTask
   };
})(window);

(function (window){
 var taskList = [ ];

function listTask(){
  // return

 }

 function addTaskToList(task, list){
   return list.push(task);
 }

 function editTask(position, newTaskName){
   return taskList[position] = newTaskName;

 }

 function deleteTask (task, list){
   return list.splice(task,1);
 }

function completeTask(task, list){
  return list[task - 1] += "COMPLETE"
}

   window.todos = {
     "taskList": taskList,
     "addTaskToList": addTaskToList,
     "completeTask": completeTask,
     "deleteTask": deleteTask,
   };

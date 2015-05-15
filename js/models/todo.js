(function(window){
 var taskList = []

 function listTask(list){
 }

 function addTask(task, list){
   return list.push(task);
 }

 function deleteTask (position, list){
   return list.splice(position, 1);
 }

   window.todos = {
     "taskList": taskList,
     "addTask": addTask,
     // "completeTask": completeTask,
     "deleteTask": deleteTask
   };
})(window);














// // (function (window) { // IIFE: Immediately Invoked Function Expression
// // 	'use strict'; // For bonus points, what does this do?
// //
// // 	var list = [ ];
// //
// // 	console.log(list);
// //
// // 	todos.addTaskToList("Remember the milk", list);
// //
// // 	console.log(list);
// //
// // })(window);
//
// // var expect = require('chai').expect;
// //
// // var taskList = [ ];
//
// // I can list my tasks...
// function (window){
// var taskList = [ ]
// }
//
// function listTask(task, list){
//    return list.push(task);
// }
//
// 		function addTaskToList(task, list){
// 			return list.
// }
//
//
//
// // expect(taskList.length).to.equal(0);
// // addTaskToList("Remember the milk", taskList);
// // expect(taskList[0]).to.equal("Remember the milk");
// // expect(taskList.length).to.equal(1);
// //
// // expect(taskList.length).to.equal(1);
// // addTaskToList("Take out the trash", taskList);
// // expect(taskList[1]).to.equal("Take out the trash");
// // expect(taskList.length).to.equal(2);
// //
// // expect(taskList.length).to.equal(2);
// // addTaskToList("Clean the house", taskList);
// // expect(taskList[2]).to.equal("Clean the house");
// // expect(taskList.length).to.equal(3);
// //
// // expect(taskList.length).to.equal(3);
// // addTaskToList("Laundry AM", taskList);
// // expect(taskList[3]).to.equal("Laundry AM");
// // expect(taskList.length).to.equal(4);
//
// window.todos = {
// "taskList": taskList
// "addTaskToList": addTaskToList
// "completeTask": completeTask
// "editTask": editTask
// };
//
// })(window);

//Copy from repo:

// (function (window){
    // var taskList = [];
		//
		// function listTask(){
		// //    return list.push(task);
		//
		// // I can list my tasks...
    // // function listTasks(list){
    // //   // TODO: make this do something...
    //}

    //I can add a task to my list...
    // function addTaskToList(task, list){
    //   //What is the task?
    //   //Where is the task going?
    //   //What order / priority?
    //   return list.push(task);
    // }
		//
		// function editTask(position, newTaskName){
		// 	return taskList[position] = newTaskName;
		// }
		//
		// function deleteTask(task, list){
		// 	return list.splice(task, 1);
		//
		//
		// }
    // //I can check a task off my list...
    // function completeTask(task, list){
    //   return tasklist[task - 1] += 'COMPLETE';
    // }
// }
    //I can delete a task off my list...
    // function deleteTask(task, list){
		//
		//
    //   return list.splice(task - 1, 1);
    // }
//
//     window.todos = {
//         "taskList": addTaskToList,
// 				"addTaskToList": addTaskToList
//         "completeTask": completeTask,
//         "deleteTask": deleteTask
//
//     };
//
// })(window);

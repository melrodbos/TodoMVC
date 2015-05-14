// (function (window) { // IIFE: Immediately Invoked Function Expression
// 	'use strict'; // For bonus points, what does this do?
//
// 	var list = [ ];
//
// 	console.log(list);
//
// 	todos.addTaskToList("Remember the milk", list);
//
// 	console.log(list);
//
// })(window);

// var expect = require('chai').expect;
//
// var taskList = [ ];

// I can list my tasks...
function (window){
var taskList = [ ]
}

function addTaskToList(){
  //  return list.push(task);
}





expect(taskList.length).to.equal(0);
addTaskToList("Remember the milk", taskList);
expect(taskList[0]).to.equal("Remember the milk");
expect(taskList.length).to.equal(1);

expect(taskList.length).to.equal(1);
addTaskToList("Take out the trash", taskList);
expect(taskList[1]).to.equal("Take out the trash");
expect(taskList.length).to.equal(2);

expect(taskList.length).to.equal(2);
addTaskToList("Clean the house", taskList);
expect(taskList[2]).to.equal("Clean the house");
expect(taskList.length).to.equal(3);

expect(taskList.length).to.equal(3);
addTaskToList("Laundry AM", taskList);
expect(taskList[3]).to.equal("Laundry AM");
expect(taskList.length).to.equal(4);

window.todos = {
"taskList": taskList
"addTaskToList": addTaskToList
"completeTask": completeTask
"editTask": editTask
};

})(window);

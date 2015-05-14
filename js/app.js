// (function (window) {
// 	'use strict';
//
// 	// Your starting point. Enjoy the ride!
//
// })(window);

//Trying to get an understanding on what the MVC is...
//Model:
//View:
//Controllers:

/*I am using the nestingAccordions file as reference to try to get something done?
Confusssion cleared? The MVC works with files:
Model: data storage
View: the part of JS that we see in the html file.
Controllers: action manager it can send commands to the model to update its state (Wikipedia)*/

alert("I'm alive!")
//debugger;

//I can _see tasks_!

document.head.parentElement.className = "js"; // It's alive!

//var elements = document.querySelectorAll('h3');
// lets start by defining a variable and play with what we feed to .querySelector?
// header (h3: in this case), find with the element inspector the

//function from Nesting accordions?

// function( $, window, undefined ) {
//
// 	'use strict';
//
// 	// global
// 	var $body = $( 'html, body' );
//
// 	$.CBPNTAccordion = function( options, element ) {
// 		this.$el = $( element );
// 		this._init( options );
// 	};

//

var elements = document.querySelectorAll('header');

/*use [`Element.addEventListener`](https://developer.mozilla.org/en-US/docs/
Web/API/EventTarget/addEventListener) to attach event listeners


I can _add tasks_!

I can _complete tasks_!

I can _delete tasks_!

I can _edit tasks_! */



//Found a helpful (hopefully): http://spinejs.com/docs/example_tasks



class TaskApp extends Spine.Controller
  elements:
    ".items": "items"

  constructor: ->
    super
    Task.bind("create",  @addOne)
    Task.bind("refresh", @addAll)
    Task.fetch()

  addOne: (task) =>
    view = new Tasks(item: task)
    @items.append(view.render().el)

  addAll: =>
    Task.each(@addOne)

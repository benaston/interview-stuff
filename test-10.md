Look at the following code:

	function Foo() {}
	//How many objects have been created as a result of the above line?


-----

What does the following print to the console?

	var x = 0;
	
	function foo() {
		setTimeout(function(){
			console.log(x);
		}, 10);
	}
	foo(); 

Ans: 0 (after 10 ms)

-------

What does the following print to the console?

	var x = 0;
	
	function foo() {
		for(var x = 0; x < 5; x++) {
			setTimeout(function(){
				console.log(x);
			}, 10);
		}
	}
	foo(); //outputs '5', five times in very rapid succession (i.e. less than 10ms) - trick question

Tricks: 
 - first, the x < 5 is misdirection and means that the loop will be evaluated five times despite appearances.
 - second, the 10ms is misdirection, and means that everything will happen in rapid succession rather than staged at intervals of 10ms (which is what setTimeout is more typically seen used for). Plus 10ms is too short for the human mind to notice when run, exactly what happens avoiding copy and paste.
 
	var x = 0;
	
	function foo() {
		console.log(setTimeout(function(){
			console.log(x);
		}, 10));
	}
	
	foo(); //integer corresponding to the next handle for setTimeout, followed by 0 (after 10 ms)

////////////////////

	var x = 0;
	
	function foo() {
		for(var x = 0; x < 5; x++) {
			var y = x;
			setTimeout(function(){
				console.log(y);
			}, 10);
		}
	}
	
	foo(); //outputs '4', five times in very rapid succession (i.e. less than 10ms) - trick question

Tricks: 
 - first, the x < 5 is misdirection and means that the loop will be evaluated five times despite appearances.
 - second, the 10ms is misdirection, and means that everything will happen in rapid succession rather than staged at intervals of 10ms (which is what setTimeout is more typically seen used for). Plus 10ms is too short for the human mind to notice when run, exactly what happens avoiding copy and paste.

Explanation: 
x increments from zero to 5 through a loop (postfix ++ operator).
Each time x is copied to y *before* it is incremented (postfix ++ operator).
It is copied because literal Numbers have value semantics.
So, after the initial execution phase of the script, y is set to 4.
The sequence of values of x *inside the loop* is: 0, 1, 2, 3, 4.
NOTE: The sequence of values of x outside the loop is: 0, 1, 2, 3, 4, 5 (postfix ++ operator).
y is closed over by console.log, and is hence outputted to the screen.

////////////////////

	var x = 0;
	
	function foo() {
		for(var x = 0; x < 5; x++) {
			setTimeout(function(){
				console.log(x);
			}, 10);
		}
	}
	
	foo(); //outputs '5', five times in very rapid succession (i.e. less than 10ms) - trick question

Tricks: 

Explanation: 
x increments from zero to 4 through a loop.
Each time x is present within the loop (and indeed anywhere that can 'see' x) as it's initial value before it is incremented (postfix ++ operator).
The sequence of values of x inside the loop is: 0, 1, 2, 3, 4.
NOTE: The sequence of values of x outside the loop is: 0, 1, 2, 3, 4, 5 (postfix ++ operator).
NOTE: that x is incremented therefore, six times (which is counter-intuitive)
So, after the initial execution phase of the script, x is set to 5.
At this point we have 5 callbacks sitting on the stack, each with their own execution contexts.
An execution context contains references to the *actual* variables present in the context, not copies.
This means that all the execution contexts see the same instance and hence value of x.
When the callbacks start being evaluated in rapid succession, they all see the value of x assigned at completion of the ititial execution (5).
So the value '5' is printed to the console five times, once for each callback on the callback queue.

////////////////////

	var x = 0;
	
	function foo() {
		for(var x = 0; x < 5; x++) {
			(function() {
				var y = x;
				setTimeout(function(){
					console.log(y);
				}, 10);
			}());
		}
	}
	
	foo();

Explanation: 
x increments from zero to 4 through a loop.
Each time x is present within the loop (and indeed anywhere that can 'see' x) as it's initial value before it is incremented (postfix ++ operator).
The sequence of values of x inside the loop is: 0, 1, 2, 3, 4.
Each time through the loop a function is created and immediately evaluated.
The creation of a function and its immediate execution sets up an execution context.
Each time the IIFE is run, a new variable is created (all with the name 'y').
So you end up with five 'y's. Each y contains the value of x at assignment time because Number literals have copy semantics.


////////////////////

When interviewing:
 - avoid tricks and misdirection. 
Inform the candidate of exactly what to expect - i.e. what topics will be tested and to what depth, enabling preparation.
Be human at all times and explain that the interview might hurt and that they are welcome to re-apply should they not get sufficient score.
- avoid using libraries. Do not use libraries, check if the candidate is familiar with them, and then proceed regardsless.
 - Don't schedule it for 1700 on a Friday if there is an in-depth technical component
 - Realize that the interviewee doesn't know you and doesn't know whether you are a tricky bastard, or a straight-up kinda guy.
 - This means he will be very cautious and experience additional stress/performance anxiety (he will assume the worst)
 - Bear in mind that the human brain works best when presented a problem gradually, so build up the problem if it is complex.

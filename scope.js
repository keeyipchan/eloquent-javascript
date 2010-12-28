var ejs = {
		'debug':function(s) {
			if(typeof(print) != 'undefined') {
				print(s);
			} else if(typeof(console) != 'undefined' && console.debug)  {
				console.debug(s);
			} else if(typeof(alert) != 'undefined') {
				alert(s)
			}
		},
		'banner': function(s) {
			ejs.debug('\n');
			ejs.debug('---------------------------');
			ejs.debug(s);
			ejs.debug('---------------------------');
		}
};

ejs.banner('variables defined within a function are out of scope for functions called within that function');
var v = "global var";

function functionOne() {
	ejs.debug('calling functionOne');
	ejs.debug(v);
}

function functionTwo() {
	var v = "f2";
	ejs.debug('v as defined in functionTwo: ' + v);
	ejs.debug('calling functionTwo');
	functionOne();
}

functionTwo();

ejs.banner('variables defined within a function are in scope for functions that are defined in the parent function');
function functionTwo() {
	var v = "f2";
	ejs.debug('v as defined in functionTwo: ' + v);
	ejs.debug('calling functionTwo');
	function functionOne() {
		ejs.debug('calling functionOne');
		ejs.debug(v);
	}
	functionOne();
}

ejs.banner('closures');
var v = 'global';
function outerFunc() {
	var v = 'defined in outerFunc';
	function innerFunc() {
		ejs.debug(v);
	}
	return innerFunc;
}
f = outerFunc();
f();

ejs.banner('function synthesis');
function makeAdd(n) {
	var numberToAdd = 0;
	function add(m) {
		return n + m;
	}
	return add;
}
addFive = makeAdd(5);
addTwo = makeAdd(2);
ejs.debug(addFive(10));
ejs.debug(addTwo(10));

ejs.banner('more recursion');
function findSeq(goal) {
	var n = 0;
	var history;
	if (n == goal) {
		return history;

	}
}

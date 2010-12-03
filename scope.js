var ejs = {
		'debug':function(s) {
			if(typeof(print) != 'undefined') {
				print(s);
			} else if(typeof(console) != 'undefined' && console.debug)  {
				console.debug(s);
			} else if(typeof(alert) != 'undefined') {
				alert(s)
			}
		}
};

ejs.debug('variables defined within a function are out of scope for functions called within that function');
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

ejs.debug('variables defined within a function are in scope for functions that are defined in the parent function');
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

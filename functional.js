function forEach(a, f) {
	for (i in a)
		f(a[i]);
}
function map(f, a) {
	var result = []
	forEach(a, function(e) {
		result.push(f(e));
	}); 
	return result;
}
function reduce(combine, base, a) {
	forEach(a, function(x) {
		base = combine(base, x);
	});
	return base;
}
var op = {
	'+': function(a, b) {return a + b;},
	'-': function(a, b) {return a - b;},
	'*': function(a, b) {return a * b;},
	'/': function(a, b) {return a / b;},
	'==': function(a, b) {return a == b;},
	'===': function(a, b) {return a === b;},
	'!': function(a) {return !a;}
}
function asArray(quasiArray, start) {
	var result = [];
	for (var i=(start || 0); i < quasiArray.length; i++)
		result.push(quasiArray[i]);
	return result;
}

function partial(func) {
	// need to stored fixed args in closure
	var fixedArgs = asArray(arguments, 1);
	return function() {
		// when a new function is returned, it will always have fixedArgs as its first arg
		return func.apply(null, fixedArgs.concat(asArray(arguments)));
	};
}
function compose(f1, f2) {
	return function () {
		return !f1(f2.apply(null,arguments));
	}
}

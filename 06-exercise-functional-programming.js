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
ejs.banner('forEach');
function forEach(a, f) {
	for (i in a)
		a[i] = f(a[i]);
	return a;
}
ejs.debug(forEach([1, 2, 3, 4], function(x) { return x + 5; }));
ejs.debug(forEach([1, 2, 3, 4], ejs.debug));
ejs.banner('reimplementing forEach so that it is non destructive');
function forEach(a, f) {
	for (i in a)
		f(a[i]);
}

ejs.banner('reimplementing sum');
function sum(a) {
	var total = 0;
	forEach(a, function(n) {
		total += n;
	});
	return total;
}
ejs.debug(sum([4, 4]));
ejs.debug(sum([1, 10, 100]));

ejs.banner('apply and negate');
ejs.debug(Math.min(5, 6, 2));
ejs.debug(Math.min.apply(null, [5, 6, 2]));
function negate(f) {
	return function() {
		return !f.apply(null, arguments);
	};
}
ejs.debug((negate(isNaN))(2));
ejs.debug((negate(isNaN))(undefined));

ejs.banner('reduce and implementation of sum with reduce');
function reduce(combine, base, a) {
	forEach(a, function(x) {
		base = combine(base, x);
	});
	return base;
}
function add(x, y) {return x + y;}
function sum(a) {
	return reduce(add, 0, a);
}
ejs.debug(sum([1, 2, 3]));
ejs.debug('');

ejs.banner('6.1 - count zeroes');
function count_zeroes(a) {
	return reduce(function(base, x) {
		return (x == 0) ? base + 1 : base; 
	},0 , a);
}
ejs.debug(count_zeroes([1, 2, 3, 0]));
ejs.debug(count_zeroes([1, 2, 0, 0, 3, 0]));
ejs.debug(count_zeroes([1]));

ejs.banner('pass test function');
function count(test, a) {
	return reduce(function(base, x) {
		return test(x) ? base + 1 : base;	
	}, 0, a);
}

function equals(x) {
	return function(y) {
		return (x === y);
	}
}

function count_zeroes_2(a) {
	return count(equals(0), a);
}
ejs.debug(count_zeroes_2([1, 2, 3, 0]));
ejs.debug(count_zeroes_2([1, 2, 0, 0, 3, 0]));
ejs.debug(count_zeroes_2([1]));



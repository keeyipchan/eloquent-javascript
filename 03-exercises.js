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

ejs.banner('3.2');
function greaterThan(n) {
	return function(x) {
		return x > n || false;
	};
}
greaterThanFive = greaterThan(5);
ejs.debug(greaterThanFive(2));
ejs.debug(greaterThanFive(7));

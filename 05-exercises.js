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
ejs.banner('custom exceptions');

var SomeError = {};

function foo() {
	throw SomeError;
}
try
{
	foo();
}
catch(e) {
	ejs.debug("caught " + typeof e + ' ' + e);
}


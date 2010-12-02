function abs(n) {
	return (n < 0) ? (-1 * n) : n;
}

debug(abs(-1));
debug(abs(1));
debug(abs(0));

function debug(s) {
	if(typeof(print) != 'undefined') {
		print(s);
	} else if(typeof(console) != 'undefined' && console.debug)  {
		console.debug(s);
	} else if(typeof(alert) != 'undefined') {
		alert(s)
	}
}

function abs(n) {
	return (n < 0) ? (-1 * n) : n;
}

debug(abs(-1));
debug(abs(1));
debug(abs(0));

function debug(s) {
	if(print) {
		print(s);
	} else if(console)  {
		console.debug(s);
	} else {
		alert(s)
	}
}

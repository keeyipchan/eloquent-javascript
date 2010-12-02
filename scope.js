ejs = {
		function debug(s) {
			if(typeof(print) != 'undefined') {
				print(s);
			} else if(typeof(console) != 'undefined' && console.debug)  {
				console.debug(s);
			} else if(typeof(alert) != 'undefined') {
				alert(s)
			}
		}
};
ejs.debug("hello");

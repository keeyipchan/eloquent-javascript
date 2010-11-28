ejs = {
	"debug":
		function(s) {
			if(print) {
				print(s);
			} else if(console)  {
				console.debug(s);
			} else {
				alert(s);
			}
		}
};
ejs.debug("hello");

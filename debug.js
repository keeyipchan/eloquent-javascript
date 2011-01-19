var ejs = {
		'debug':function(s) {
			var debugLine = s;
			if (typeof(s) == 'object') { debugLine = ejs.toString(s) }
			if(typeof(print) != 'undefined') {
				print(debugLine);
			} else if(typeof(console) != 'undefined' && console.debug)  {
				console.debug(debugLine);
			} else if(typeof(alert) != 'undefined') {
				alert(debugLine);
			}
		},
		'banner': function(s) {
			ejs.debug('\n');
			ejs.debug('---------------------------');
			ejs.debug(s);
			ejs.debug('---------------------------');
		},
		'debugObj':function(obj) {
			ejs.debug(ejs.toString(obj));
		},

		'toString':function(obj) {
			var s = '';
			var props = [];
			var type = ejs.getType(obj);
			var prop_type;
			var string_rep;
			if (type == 'object' || type == 'list') {
				for (prop in obj) {
					//ejs.debug('====type of obj[prop] is ' + typeof obj[prop] + ' and val is ' + obj[prop]);
					string_rep = '';
					if (type == 'object') {
						string_rep = prop + ':'; 
					}
					prop_type = ejs.getType(obj[prop]);
					if(prop_type == 'object' || prop_type == 'list') {
						//ejs.debug('---- it is an object, to string it again');
						props.push(string_rep + ejs.toString(obj[prop]));
					} else {
						//ejs.debug('---- not an obj ' + obj[prop]);
						props.push(string_rep + obj[prop]);
					}
				}
			}

			s += props.join(',');

			if (type == 'object') {
				s = '{' + s + '}';
			} 

			if (type == 'list') {
				s = '[' + s + ']';
			}

			return s;
		},

		'getType':function(obj) {
			var type = typeof obj;
			if (type == 'object' && typeof obj.length != 'undefined') {
				type = 'list';
			}
			return type;

		}
};

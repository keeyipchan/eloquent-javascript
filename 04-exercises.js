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
ejs.banner('object references');
var o1 = {'value':10};
var o2 = {'value':10};
var o3 = o2;
ejs.debug('equality? o1 and o2');
ejs.debug(o1 == o2);
ejs.debug('equality? o2 and o3');
ejs.debug(o2 == o3);
ejs.debug('original values for o1, o2, o3');
ejs.debug(o1.value);
ejs.debug(o2.value);
ejs.debug(o3.value);
ejs.debug('changing o2.value to 25');
o2.value = 25;
ejs.debug(o1.value);
ejs.debug(o2.value);
ejs.debug(o3.value);

ejs.banner('4.2 range function');
function range(n) {
	var a = [];
	if (n >= 0) {
		for (var i = 0; i <= n; i++) {
			a[i] = i;
		}
	}
	return a;
}
ejs.debug(range(0));
ejs.debug(range(1));
ejs.debug(range(2));
ejs.debug(range(3));
ejs.debug(range(45));
ejs.debug(range(-1));

ejs.banner('string methods');
var s = 'asdf';
ejs.debug(typeof s.toUpperCase)
ejs.debug(s.toUpperCase());

ejs.banner('more object references');
/*
var chineseBox = {};
chineseBox.content = chineseBox;
ejs.debug(("content" in chineseBox);
ejs.debug("content" in chineseBox.content);
*/

var chineseBox = {};
chineseBox.content = chineseBox;
ejs.debug(chineseBox);
ejs.debug("content" in chineseBox);
ejs.debug("content" in chineseBox.content);

ejs.banner('array methods');
var mack = []
mack.push('Mack');
mack.push('the');
mack.push('knife');
ejs.debug(mack.join(" "));
ejs.debug(mack.pop());
ejs.debug(mack);

ejs.banner('4.3 example of join / split not equal');
s = 'foo,bar';
ejs.debug(s.split(',').join(','));
a = ['foo,bar', 'baz'];
ejs.debug(a.join(',').split(','));

ejs.banner('more string methods: charAt, slice');
ejs.debug('asdf'.charAt(0));
ejs.debug('asdf'.charAt(1));
ejs.debug('asdf'.charAt(2));
ejs.debug('asdf'.charAt(3));
ejs.debug('asdf'.charAt(4));

ejs.debug('asdf'.slice(0, 2));

ejs.banner('4.3 startsWith');
function starts_with(s, small_string) {
	return s.slice(0, small_string.length) == small_string;
}
ejs.debug(starts_with('foobar', 'foo'));
ejs.debug(starts_with('bar', 'foobar'));
String.prototype.startsWith = function(s) {
	return this.slice(0, s.length) == s;
}
ejs.debug('monkeypatched...');
ejs.debug('asdf'.startsWith('a'));
ejs.debug('asdf'.startsWith('s'));
ejs.debug('asdf'.startsWith('as'));
ejs.debug('asdf'.startsWith('asdf'));
ejs.debug('asdf'.startsWith('asdfg'));

ejs.banner('4.5 parsing cat names from paragraph');
function catNames(s) {
	return (s.slice(s.indexOf(':') + 2, s.length)).split(',');
}
ejs.debug(catNames("born 20/09/2004 (mother Yellow Bess): " +
              "Doctor Hobbles the 2nd, Noog"));

ejs.banner('enumerating object properties');
o = {'foo':'bar', 'baz':'qux'};
for (var prop in o)
	ejs.debug(prop);

ejs.banner('Date Objects');
ejs.debug('month start index is 0!?');
var d = new Date(2010, 11, 1);
ejs.debug(d);
ejs.debug(d.getTime());
ejs.debug(d.getMonth());
ejs.debug(d.getYear());
ejs.debug(d.getFullYear());

ejs.banner('4.10 - modified range function');
function range() {
	var a = [];
	var start = 0;
	var end = 0;
	if (arguments.length == 1) {
		end = arguments[0];
	} else if  (arguments.length == 2){
		start = arguments[0];
		end = arguments[1];
	} 
	for (var i = start; i <= end; i++) {
		a.push(i);
	}
	return a;
}
ejs.debug(range(0));
ejs.debug(range(1));
ejs.debug(range(2));
ejs.debug(range(3));
ejs.debug(range(20));
ejs.debug(range(2,2));
ejs.debug(range(2,4));
ejs.debug(range(10,15));
ejs.debug(range(15,10));
ejs.debug(range(-5));
ejs.debug(range(-5, 0));

ejs.banner('4.11 sum');

function sum(a) {
	total = 0;
	for (n in a)
		total += a[n];
	return total;
}
ejs.debug(sum([4,4]));
ejs.debug(sum(range(4)));
ejs.debug(sum(range(4, 20)));

ejs.banner('enumerating props in Math');
for (var prop in Math)
	ejs.debug(prop);


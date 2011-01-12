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
		},
		'debugObj':function() {
		}

		'toString':function(obj) {
			var s = ''
			var type = typeof obj;
			if (type == 'object' && typeof obj.length != 'undefined') {
				type = 'list';
			}
			for (prop in obj) {
				ejs.debugObj(prop + ':' + s[prop]);	
			}
			if(typeof(obj) == 'object') {
			} else {
				ejs.debug(s);
			}
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

ejs.banner('map');
function map(f, a) {
	var result = []
	forEach(a, function(e) {
		result.push(f(e));
	}); 
	return result;
}

ejs.debug(map(function (x) { return x * 2; }, [1, 2, 3, 4, 5]));


function recluseFile() {
	return "" + 
"% The Book of Programming\n" + 
"\n" + 
"%% The Two Aspects\n" + 
"\n" + 
"Below the surface of the machine, the program moves. Without effort,\n" + 
"it expands and contracts. In great harmony, electrons scatter and\n" + 
"regroup. The forms on the monitor are but ripples on the water. The\n" + 
"essence stays invisibly below.\n" + 
"\n" + 
"When the creators built the machine, they put in the processor and the\n" + 
"memory. From these arise the two aspects of the program.\n" + 
"\n" + 
"The aspect of the processor is the active substance. It is called\n" + 
"Control. The aspect of the memory is the passive substance. It is\n" + 
"called Data.\n" + 
"\n" + 
"Data is made of merely bits, yet it takes complex forms. Control\n" + 
"consists only of simple instructions, yet it performs difficult\n" + 
"tasks. From the small and trivial, the large and complex arise.\n" + 
"\n" + 
"The program source is Data. Control arises from it. The Control\n" + 
"proceeds to create new Data. The one is born from the other, the\n" + 
"other is useless without the one. This is the harmonious cycle of\n" + 
"Data and Control.\n" + 
"\n" + 
"Of themselves, Data and Control are without structure. The programmers\n" + 
"of old moulded their programs out of this raw substance. Over time,\n" + 
"the amorphous Data has crystallised into data types, and the chaotic\n" + 
"Control was restricted into control structures and functions.\n" + 
"\n" + 
"%% Short Sayings\n" + 
"\n" + 
"When a student asked Fu-Tzu about the nature of the cycle of Data and\n" + 
"Control, Fu-Tzu replied 'Think of a compiler, compiling itself.'\n" + 
"\n" + 
"A student asked 'The programmers of old used only simple machines and\n" + 
"no programming languages, yet they made beautiful programs. Why do we\n" + 
"use complicated machines and programming languages?'. Fu-Tzu replied\n" + 
"'The builders of old used only sticks and clay, yet they made\n" + 
"beautiful huts.'\n" + 
"\n" + 
"A hermit spent ten years writing a program. 'My program can compute\n" + 
"the motion of the stars on a 286-computer running MS DOS', he proudly\n" + 
"announced. 'Nobody owns a 286-computer or uses MS DOS anymore.',\n" + 
"Fu-Tzu responded.\n" + 
"\n" + 
"Fu-Tzu had written a small program that was full of global state and\n" + 
"dubious shortcuts. Reading it, a student asked 'You warned us against\n" + 
"these techniques, yet I find them in your program. How can this be?'\n" + 
"Fu-Tzu said 'There is no need to fetch a water hose when the house is\n" + 
"not on fire.'{This is not to be read as an encouragement of sloppy\n" + 
"programming, but rather as a warning against neurotic adherence to\n" + 
"rules of thumb.}\n" + 
"\n" + 
"%% Wisdom\n" + 
"\n" + 
"A student was complaining about digital numbers. 'When I take the root\n" + 
"of two and then square it again, the result is already inaccurate!'.\n" + 
"Overhearing him, Fu-Tzu laughed. 'Here is a sheet of paper. Write down\n" + 
"the precise value of the square root of two for me.'\n" + 
"\n" + 
"Fu-Tzu said 'When you cut against the grain of the wood, much strength\n" + 
"is needed. When you program against the grain of a problem, much code\n" + 
"is needed.'\n" + 
"\n" + 
"Tzu-li and Tzu-ssu were boasting about the size of their latest\n" + 
"programs. 'Two-hundred thousand lines', said Tzu-li, 'not counting\n" + 
"comments!'. 'Psah', said Tzu-ssu, 'mine is almost a *million* lines\n" + 
"already.' Fu-Tzu said 'My best program has five hundred lines.'\n" + 
"Hearing this, Tzu-li and Tzu-ssu were enlightened.\n" + 
"\n" + 
"A student had been sitting motionless behind his computer for hours,\n" + 
"frowning darkly. He was trying to write a beautiful solution to a\n" + 
"difficult problem, but could not find the right approach. Fu-Tzu hit\n" + 
"him on the back of his head and shouted '*Type something!*' The student\n" + 
"started writing an ugly solution. After he had finished, he suddenly\n" + 
"understood the beautiful solution.\n" + 
"\n" + 
"%% Progression\n" + 
"\n" + 
"A beginning programmer writes his programs like an ant builds her\n" + 
"hill, one piece at a time, without thought for the bigger structure.\n" + 
"His programs will be like loose sand. They may stand for a while, but\n" + 
"growing too big they fall apart{Referring to the danger of internal\n" + 
"inconsistency and duplicated structure in unorganised code.}.\n" + 
"\n" + 
"Realising this problem, the programmer will start to spend a lot of\n" + 
"time thinking about structure. His programs will be rigidly\n" + 
"structured, like rock sculptures. They are solid, but when they must\n" + 
"change, violence must be done to them{Referring to the fact that\n" + 
"structure tends to put restrictions on the evolution of a program.}.\n" + 
"\n" + 
"The master programmer knows when to apply structure and when to leave\n" + 
"things in their simple form. His programs are like clay, solid yet\n" + 
"malleable.\n" + 
"\n" + 
"%% Language\n" + 
"\n" + 
"When a programming language is created, it is given syntax and\n" + 
"semantics. The syntax describes the form of the program, the semantics\n" + 
"describe the function. When the syntax is beautiful and the semantics\n" + 
"are clear, the program will be like a stately tree. When the syntax is\n" + 
"clumsy and the semantics confusing, the program will be like a bramble\n" + 
"bush.\n" + 
"\n" + 
"Tzu-ssu was asked to write a program in the language called Java,\n" + 
"which takes a very primitive approach to functions. Every morning, as\n" + 
"he sat down in front of his computer, he started complaining. All day\n" + 
"he cursed, blaming the language for all that went wrong. Fu-Tzu\n" + 
"listened for a while, and then reproached him, saying 'Every language\n" + 
"has its own way. Follow its form, do not try to program as if you\n" + 
"were using another language.'\n"; 

}

//Split the file into paragraphs by cutting it at every empty line.
//Remove the '%' characters from header paragraphs and mark them as headers.
//Process the text of the paragraphs themselves, splitting them into normal parts, emphasised parts, and footnotes.
//Move all the footnotes to the bottom of the document, leaving numbers1 in their place.
//Wrap each piece into the correct HTML tags.
//Combine everything into a single HTML document.
ejs.banner('split into paragraphs');
var paragraphs = recluseFile().split("\n\n");
forEach(paragraphs, function(e) {
	ejs.debug(e + "\n--");
});
ejs.debug('got ' + paragraphs.length + ' paragraphs');

ejs.banner('6.2');
function processParagraph(s) {
	var header_pattern = /^%{1,2}/;
	var p = {};
	var matches = s.match(header_pattern)
	if (matches) {
		p['type'] = 'h' + matches[0].length;	
		p['content'] = s.slice(matches[0].length);	
	} else {
		p['type'] = 'p';	
		p['content'] = s	
	}
	return p;
}
a = map(processParagraph, paragraphs);
ejs.debug(a);
forEach(a, function(e) { 
		ejs.debug('<' + e['type'] + '>' + e['content']); 
		});
ejs.banner('6.2 using charAt()');
function processParagraph(s) {
	var count = 0;
	while(s.charAt(0) == '%') {
		s = s.slice(1);
		count++;
	}
	return {'type': (count > 0) ? 'h' + count : 'p', 'content':s };
}

a = map(processParagraph, paragraphs);
ejs.debug(a);
forEach(a, function(e) { 
		ejs.debug('<' + e['type'] + '>' + e['content']); 
		});
ejs.banner('6.3');
function splitParagraph(s) {
	var paragraph = s;
	var fragments = [];

	while(paragraph) {
		parseParagraph();
	}
	return fragments;

	function parseParagraph() {
		var firstChar =  paragraph.charAt(0);
		var lastChar;
		var fragment;
		if(firstChar =='{') {
			lastChar = getIndexOfChar('}');
			fragment = {'content':paragraph.slice(1, lastChar), 'type':'footnote'};
			paragraph = paragraph.slice(lastChar + 1);
		} else if (firstChar == '*') {
			paragraph = paragraph.slice(1);
			lastChar = getIndexOfChar('*');
			fragment = {'content':paragraph.slice(0, lastChar), 'type':'em'};
			paragraph = paragraph.slice(lastChar + 1);
		} else {
			lastCharEm = getIndexOfChar('{');
			lastCharFootnote = getIndexOfChar('*');
			if(lastCharEm == -1 && lastCharFootnote == -1) {
				lastChar = paragraph.length;
			} else {
				lastChar = lastCharEm > lastCharFootnote ? lastCharFootnote : lastCharEm;
			}
			fragment = {'content':paragraph.slice(0, lastChar), 'type':'text'};
			paragraph = paragraph.slice(lastChar);
		}
		//ejs.debug(fragment['content']);
		fragments.push(fragment);
	}

	function getIndexOfChar(c) {
		//ejs.debug('in getIndexOfChar()');
		var count = 0;
		var s = '';
		while(paragraph.length > count && paragraph.charAt(count) != c) {
			count++;
		}
		return count;
	}
}
ejs.debug('test 1 ====');
var testString = 'foo{bar}*baz*boo';
forEach(splitParagraph(testString), function(e) {
	ejs.debug(e['type'] + ' ' + e['content']);
});
ejs.debug('test 2 ====');
var testString = 'foo{bar}*baz**boo*';
forEach(splitParagraph(testString), function(e) {
	ejs.debug(e['type'] + ' ' + e['content']);
});
ejs.debug('test 3 ====');
var testString = '{foo}{bar}baz{boo}';
forEach(splitParagraph(testString), function(e) {
	ejs.debug(e['type'] + ' ' + e['content']);
});
ejs.banner('Combine with processPAragraph');
function processParagraph(s) {
	var count = 0;
	while(s.charAt(0) == '%') {
		s = s.slice(1);
		count++;
	}
	return {'type': (count > 0) ? 'h' + count : 'p', 'content':splitParagraph(s) };
}
var paragraphs = recluseFile().split("\n\n");
a = map(processParagraph, paragraphs);
ejs.debug(a);
forEach(a, function(e) { 
		ejs.debug('<' + e['type'] + '>');
		forEach(e['content'], function(e2) {
			ejs.debug('<' + e2['type'] + '>' + e2['content']); 
		});
});
ejs.banner('testing function scope again');
function outter() {
	var foo = ['bar'];
	function inner(arg) {
		arg[0] = 'baz';
	}
	inner(foo);
	return foo;
}
ejs.debug(outter());

ejs.banner('extract footnotes');
function extractFootnotes(paragraphs) {
	var count = 0;
	var footnotes = [];
	forEach(paragraphs, function(p) {
		if(typeof(p['content']) != 'undefined' && p['content'].length > 0) {
			forEach(p['content'], function(fragment) {
				if(fragment['type'] == 'footnote') {
					footnotes.push(fragment['content']);
					fragment['content'] = count;
					fragment['type'] == 'reference';
					count++;
				}
			});
		}
	}); 
	return footnotes;
}

a = map(processParagraph, paragraphs);
forEach(extractFootnotes(a), function(e) {
		ejs.debug(e + "\n");
		});

ejs.banner('extract footnotes, reimplemented using map'); 
function extractFootnotes(paragraphs) {
	var footNotes = [];
	var count = 0;
	function replaceFootnotes(e) {
		if (e['type'] == 'footnote') {
			footNotes.push(e['content']);
			e['content'] = count;
			e['type'] = 'reference';
		}
		count++;
		return e;
	}

	forEach(paragraphs, function(p) {
		p['content'] = map(replaceFootnotes, p['content']);
	});
	return footNotes;

}
	
a = map(processParagraph, paragraphs);
forEach(extractFootnotes(a), function(e) {
		ejs.debug(e + "\n");
		});

// toto: is this line necessary in the book's version of extrFootNotes?
//fragment.number = currentNote;


ejs.banner('generating html'); 
function tag(name, content, attributes) {
	return {'name':name, 'content':content, 'attributes':attributes};
}

function link(target, text) {
	return tag('a', [text], {'href':target});
}

function htmlDoc(title, bodyContent) {
	return tag("html", [tag("head", [tag("title", [title])]),
						tag("body", bodyContent)]);
}
function img(src, alt) {
	return tag("img", [], {'src':src, 'alt':alt});
}
linksy = link('http://foo.bar', 'baz');
ejs.debug(linksy);
ejs.debugObj(htmlDoc('foo', 'bar'));
ejs.banner('escape html');
function escapeHTML(text) {
	var replacements = [[/&/g, "&amp;"], [/"/g, "&quot;"],
                      [/</g, "&lt;"], [/>/g, "&gt;"]];
	forEach(replacements, function(e) {
		text = text.replace(e[0], e[1]);	
	});
	return text;
}

s = 'amp & | quote " | less than < | greater than >';
ejs.debug(escapeHTML(s));

function renderHTML(element) {
	render([element]);

	function render(elements) {
		forEach(elements, function(e) {
			ejs.debug('0000');
			ejs.debugObj(e);
			ejs.debug('0000');
			if(typeof e.content == 'object' && e.content.length) {
				render(e.content);
			} else {
				toHTML(e.content);
			}
		});
	}

	function toHTML(element) {
		if(typeof element != 'undefined') {
			html = '';
			attributes = '';
				attributes = reduce(element.attributes, '', function(base, attribute) {
					return base += attribute;
				});
			return '<' + element.tag + ' ' + attributes + '>' + element.content + '</' + element.tag + '>';
		}
	}
}
ejs.debug(renderHTML(linksy));

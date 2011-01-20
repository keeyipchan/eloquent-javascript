load('functional.js');
load('debug.js');
ejs.banner('Chapter 7 - Search');


var roads = {};

function makeRoad(from, to, length) {
	function addRoad(from, to) {
		if(!(from in roads)) 
			roads[from] = [];
		roads[from].push({'to':to, 'distance':length});
	}
	addRoad(from, to);
	addRoad(to, from);
}

makeRoad("foo", "bar", 20);
ejs.debug(roads)
assertEquals(ejs.toString({}), ejs.toString({}));

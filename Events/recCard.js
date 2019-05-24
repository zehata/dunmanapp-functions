var card = {
    "title": "Events",
    "height": 300,
    "background": "linear-gradient(135deg, #1AD6FD 0%,#1D62F0 100%)",
    "style": "scrollX",
    "theme": "light",
    "desc": [],
}

var events;
var events = getappdata();
for(var i = 0; i < events.length; i++){
	events.push(events[i].eventname);
}
card.desc = events;

var generatedcard = card;
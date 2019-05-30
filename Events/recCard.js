var card = {
    "title": "Events",
    "height": 300,
    "background": "#FF2D55",
    "style": "scrollX",
    "theme": "light",
    "desc": [],
}

var desc = [];
var data = getappdata();
for(var i = 0; i < data.length; i++){
	var section = data[i].eventname + "\r" + data[i].desc;
	desc.push(section);
}
card.desc = desc;

var generatedcard = card;
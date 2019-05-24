var card = {
    "title": "Competition Updates",
    "height": 300,
    "background": "#FF2D55",
    "style": "scrollX",
    "theme": "light",
    "desc": [],
}

var desc = [];
var data = getappdata().all;
for(var i = 0; i < data.length; i++){
	var section = data[i].join(", ");
	desc.push(section);
}
card.desc = desc;

var generatedcard = card;
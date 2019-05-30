var card = {
    "title": "Events",
    "height": 300,
    "background": "linear-gradient(135deg, #1AD6FD 0%,#1D62F0 100%)",
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
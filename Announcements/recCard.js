var card = {
    "title": "Announcements",
    "height": 300,
    "background": "linear-gradient(135deg, #1AD6FD 0%,#1D62F0 100%)",
    "style": "scrollX",
    "theme": "light",
    "desc": [],
}

var desc = [];
var data = getappdata();
for(var i = 0; i < data.length; i++){
	desc.push(data[i][0]);
}
card.desc = desc;

var generatedcard = card;
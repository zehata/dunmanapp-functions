var card = {
    "title": "Flag-raising",
    "height": 300,
    "background": "linear-gradient(135deg, #b482da 0%,#ff6464 100%)",
    "style": "ioscontext",
    "theme": "light",
    "desc": "will be in Parade Square"
}

var d = new Date();

if(d.getDay() == 5){
            if(d.getHours() >= 10){
                d.setDate(d.getDate() + 1);
            }
        } else {
            if(d.getHours() >= 9){
                d.setDate(d.getDate() + 1);
            }
        }

var datetoday = (d.getFullYear())+"-"+((function(){if((d.getMonth()+1)<10 ){return "0"+(d.getMonth()+1)}else{return d.getMonth()+1}})())+"-"+((function(){if((d.getDate())<10 ){return "0"+(d.getDate())}else{return d.getDate()}})());

var level = getStudentLevel();
var venues = [];
try{
venues = getappdata()[datetoday];
}catch(e){
    venues = [0,0,0,0,datetoday,0,0,0];
    if(d.getDay() == 3){
        venues = [0,2,2,2,datetoday,2,1,1];
    } else if(d.getDay() == 5){
        venues = [0,1,1,1,datetoday,1,2,2];
    }
}
if(!venues){
    venues = [0,0,0,0,datetoday,0,0,0];
    if(d.getDay() == 3){
        venues = [0,2,2,2,datetoday,2,1,1];
    } else if(d.getDay() == 5){
        venues = [0,1,1,1,datetoday,1,2,2];
    }
}

switch(level){
    case 1:
        if(typeof venues[1] == "string"){
            card.desc = "will be in "+venues[1];
        } else {
            card.desc = "will be in "+["Parade Square","Classrooms","Hall","Auditorium"][venues[1]];
        }
        break;
    case 2:
        if(typeof venues[2] == "string"){
            card.desc = "will be in "+venues[2];
        } else {
            card.desc = "will be in "+["Parade Square","Classrooms","Hall","Auditorium"][venues[2]];
        }
        break;
    case 3:
        if(typeof venues[3] == "string"){
            card.desc = "will be in "+venues[3];
        } else {
            card.desc = "will be in "+["Parade Square","Classrooms","Hall","Auditorium"][venues[3]];
        }
        break;
    case 4:
        if(typeof venues[5] == "string"){
            card.desc = "will be in "+venues[5];
        } else {
            card.desc = "will be in "+["Parade Square","Classrooms","Hall","Auditorium"][venues[5]];
        }
        break;
    case 5:
        if(typeof venues[6] == "string"){
            card.desc = "will be in "+venues[6];
        } else {
            card.desc = "will be in "+["Parade Square","Classrooms","Hall","Auditorium"][venues[6]];
        }
        break;
    case 6:
        if(typeof venues[7] == "string"){
            card.desc = "will be in "+venues[7];
        } else {
            card.desc = "will be in "+["Parade Square","Classrooms","Hall","Auditorium"][venues[7]];
        }
        break;
}

var generatedcard = card;
function DisQuestion(x) {
    
    var topic = ["P1", "P2", "P3"]
    var id = ["P1Q1", "P1Q2", "P1Q3", "P2Q1", "P2Q2", "P2Q3", "P3Q1", "P3Q2", "P3Q3"]
    var btn = ["B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"]

    var i;
    for (i = 0; i < topic.length; i++) {
        document.getElementById(topic[i]).className = "nondisp";
    }

    document.getElementById(topic[x]).className = "disp-ctner";

    var j;
    for (j = 0; j < id.length; j++) {
        document.getElementById(id[j]).className = "nondisp";
        document.getElementById(btn[j]).className = "inactive-btn";
    }

    document.getElementById(id[3*x]).className = "disp-ans";
    document.getElementById(btn[3*x]).className = "active-btn";


}

function DisAnswer(x) {

    var id = ["P1Q1", "P1Q2", "P1Q3", "P2Q1", "P2Q2", "P2Q3", "P3Q1", "P3Q2", "P3Q3"]
    var btn = ["B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"]

    var i;
    for (i = 0; i < id.length; i++) {
        document.getElementById(id[i]).className = "nondisp";
        document.getElementById(btn[i]).className = "inactive-btn";
    }

    document.getElementById(id[x]).className = "disp-ans";
    document.getElementById(btn[x]).className = "active-btn";

}
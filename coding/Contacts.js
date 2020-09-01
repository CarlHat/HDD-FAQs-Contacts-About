function CheckValue(x) {

    var y = x + '-error';
    var z = document.getElementById(x).value;
    var m = z.length;

    if (m > 0) {
        document.getElementById(y).className = "nondisp";
    } else {
        document.getElementById(y).className = "error";
    }
}

function CheckEmail(x) {

    var y = x + '-error';
    var z = document.getElementById(x).value.indexOf("@");

    if (z == -1) {
        document.getElementById(y).className = "error";
    } else {
        document.getElementById(y).className = "nondisp";
    }
}

function CheckReason(x) {

    var y = x + '-error';
    var z = document.getElementById(x).value;

    if (z == "r0") {
        document.getElementById(y).className = "error";
    } else {
        document.getElementById(y).className = "nondisp";
    }
}

function CheckSubmit() {

    var id = ["firstName", "lastName", "email", "reason", "question"]
    var first = document.getElementById(id[0]).value.length;
    var last = document.getElementById(id[1]).value.length;
    var email = document.getElementById(id[2]).value.indexOf("@");
    var reason = document.getElementById(id[3]).value;
    var question = document.getElementById(id[4]).value.length;

    if (first == 0) {
        
        var y = id[0] + '-error';
        document.getElementById(y).className = "error";
        alert(document.getElementById(y).innerHTML);
        return false;

    } else if (last == 0) {

        var y = id[1] + '-error';
        document.getElementById(y).className = "error";
        alert(document.getElementById(y).innerHTML);
        return false;

    } else if (email == -1) {

        var y = id[2] + '-error';
        document.getElementById(y).className = "error";
        alert(document.getElementById(y).innerHTML);
        return false;

    } else if (reason == "r0") {

        var y = id[3] + '-error';
        document.getElementById(y).className = "error";
        alert(document.getElementById(y).innerHTML);
        return false;

    } else if (question == 0) {

        var y = id[4] + '-error';
        document.getElementById(y).className = "error";
        alert(document.getElementById(y).innerHTML);
        return false;
    }

}
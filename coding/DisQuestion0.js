var A1=y+"Q1"
    var A2=y+"Q2"
    var A3=y+"Q3"

    if (x=='Q1') {
        document.getElementById(A1).className = "disp-ans";
    } else {
        document.getElementById(A1).className = "nondisp";
    }

    if (x=='Q2') {
        document.getElementById(A2).className = "disp-ans";
    } else {
        document.getElementById(A2).className = "nondisp";
    }

    if (x=='Q3') {
        document.getElementById(A3).className = "disp-ans";
    } else {
        document.getElementById(A3).className = "nondisp";
    }


    if (x == 'P1') {
        document.getElementById("P1").className = "disp-ctner";
    } else {
        document.getElementById("P1").className = "nondisp";
    }

    if (x == 'P2') {
        document.getElementById("P2").className = "disp-ctner";
    } else {
        document.getElementById("P2").className = "nondisp";
    }

    if (x == 'P3') {
        document.getElementById("P3").className = "disp-ctner";
    } else {
        document.getElementById("P3").className = "nondisp";
    }
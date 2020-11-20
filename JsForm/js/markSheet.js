function btnclick() {
    var db, jq, asps, jva, htmls, boots;
    db = Dbms.value;
    jq = Jquery.value;
    jva = java.value;
    asps = asp.value;
    htmls = html.value;
    boots = boot.value;

   var t= document.getElementById('total').innerHTML = "<b>Total </b>: 600";
    console.log(t);
    var p = document.getElementById('pass').innerHTML = "<b>Passing</b>:40";
    console.log(p);


    var b = parseInt(db) + parseInt(jq) + parseInt(jva) + parseInt(asps) + parseInt(htmls) + parseInt(boots);
    var x = parseInt(b) / 6;
    document.getElementById('lblob').innerHTML = "<b>Obtain</b>:" + b;
    document.getElementById('lblper').innerHTML = "<b>Percntge</b>:" + x + "%";

    //grade section
    if (parseFloat(x) >= 80) {
        lblgrade.innerHTML = "Garde : A";
    }
    else if (parseFloat(x) >= 60) {
        lblgrade.innerHTML = "Grade : B";
    }
    else if (parseFloat(x) >= 40) {
        lblgrade.innerHTML = "Grade : C";
    }
    else {
        lblgrade.innerHTML = "<b>Grade</b>:Fail";
    }
    

    //each subject passed failed section
    if (parseFloat(db) > 40) {
        dbm.innerHTML ="<b>Dbms</b>:Passed";
    }
    else
    {
        dbm.innerHTML ="<b>Dbms</b>:Fail";
    }

    if (parseFloat(jq) > 40) {
        q.innerHTML ="<b>Jquery</b>:Passed";
    }
    else {
        q.innerHTML ="<b>Jquery</b>:Fail";
    }

    if (parseFloat(jva) > 40) {
        j.innerHTML ="<b>Javascript</b>:Passed";
    }
    else {
        j.innerHTML ="<b>Javascript</b>:Fail";
    }

    if (parseFloat(asps) > 40) {
        a.innerHTML ="<b>Asp.net</b>:Passed";
    }
    else {
        a.innerHTML ="<b>Asp.net</b>:fail";
    }

    if (parseFloat(htmls) > 40) {
        h.innerHTML ="<b>Html</b>:Passed";
    }
    else {
        h.innerHTML="<b>Html</b>:fail";
    }

    if (parseFloat(boots) > 40) {
        br.innerHTML ="<b>Bootstrap</b>:Passed";
    }
    else {
       
        br.innerHTML = "<b>Bootstrap</b>:Fail";
      
        }
    }
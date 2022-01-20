$('#submit').click(function () {
    var assignments = parseFloat($('#assignments').val());
    var groupproj = parseFloat($('#GroupProj').val());
    var quizes = parseFloat($('#quizes').val());
    var exams = parseFloat($('#exams').val());
    var intex = parseFloat($('#intex').val());
    var finalgrade = parseFloat(assignments * (.55) + groupproj * (.05) + quizes * (.10) + exams * (.20) + intex * (.10)).toFixed(2);
    var output = '';
    if (assignments <= 100 & groupproj <= 100 & quizes <= 100 & exams <= 100 & intex <= 100) {
        if (finalgrade >= 94) {
            output = ('Wow! You earned an A with a ' + finalgrade + "%")
        }
        else if (finalgrade >= 90) {
            output = ('Good Job! You earned an A- with a ' + finalgrade + "%")
        }
        else if (finalgrade >= 87) {
            output = ('Good Job! You earned an B+ with a ' + finalgrade + "%")
        }
        else if (finalgrade >= 84) {
            output = ('You earned an B with a ' + finalgrade + "%")
        }
        else if (finalgrade >= 80) {
            output = ('You earned an B- with a ' + finalgrade + "%")
        }
        else if (finalgrade >= 77) {
            output = ('You earned an C+ with a ' + finalgrade + "%")
        }
        else if (finalgrade >= 74) {
            output = ('You earned an C with a ' + finalgrade + "%")
        }
        else if (finalgrade >= 70) {
            output = ('You earned an C- with a ' + finalgrade + "%")
        }
        else if (finalgrade >= 67) {
            output = ('You earned an D+ with a ' + finalgrade + "%")
        }
        else if (finalgrade >= 64) {
            output = ('You earned an D with a ' + finalgrade + "%")
        }
        else if (finalgrade >= 60) {
            output = ('You earned an D- with a ' + finalgrade + "%")
        }
        else if (finalgrade < 60) {
            output = ('You failed the course with a ' + finalgrade + "%")
        }
        if (output != '') {
            sessionStorage.setItem("output", output);
        }
    /*    else {
            alert("Please correctly fill out the form")
        }*/
    }
        })


window.onload = function () {
    $('#output').html(sessionStorage.getItem('output'));
    sessionStorage.clear()
}
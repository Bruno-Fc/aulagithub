
class Student {

    constructor(name, grade1, grade2, grade3) {
        this.name = name;
        this.grade1 = grade1;
        this.grade2 = grade2;
        this.grade3 = grade3;
    }

}

const student = new Student();

function myFunction() {

    student.name = document.getElementById('nome').value;
    student.grade1 = document.getElementById('grade1').value;
    student.grade2 = document.getElementById('grade2').value;
    student.grade3 = document.getElementById('grade3').value;

    var finalGrade;

    finalGrade = parseFloat(student.grade1) + parseFloat(student.grade2) + parseFloat(student.grade3)

    if (finalGrade < 60) {

        var res = finalGrade - 60

        return document.getElementById('total').innerHTML =
            "RESULTADO: " + finalGrade + "YOU FAIELD "+  
            "Falta: " + res
    } else {

        return document.getElementById('total').innerHTML = "YOU PASS " + finalGrade
    }
}




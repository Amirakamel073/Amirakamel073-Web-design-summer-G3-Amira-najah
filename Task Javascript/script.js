var degree = prompt("please enter your degree");

if (degree == null || degree == "" || degree > 100 || degree < 0) {
    alert("can't apply this");
}
else {
    if (degree >= 90 && degree <= 100) {
        alert("Grade:A");
    }
    else if (degree >= 80 && degree < 90) {
        alert("Grade:B");
    }
    else if (degree >= 70 && degree < 80) {
        alert("Grade:C");
    }
    else if (degree >= 50 && degree < 70) {
        alert("Grade:D");
    }
    else {
        alert("Grade:F");
    }
}

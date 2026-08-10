var courses = ["html", "css", "javascript"]

var p = prompt("enter course name")

var index = courses.findIndex(item => item == p)

if(index != -1){
    console.log(index)
}
else{
    courses.push(p)
    console.log(courses)
}

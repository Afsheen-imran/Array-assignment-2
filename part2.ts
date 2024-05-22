
// *Part 2: Multi-Dimensional Arrays and Tuples - Student Grades Challenge:

type Student = {                       //Define a type Student to represent student name and grades
    name : string,
    grades : number[]
};
let students : Student[] = [ {           //Creating an array of students containing student objects             
    name :"Zunairah",
    grades :[80,79,89,85,80]
},
{
    name:"Yamaan",
    grades:[88,75,80,79,85]
},
{
    name:"Sadaf",
    grades:[90,91,88,85,80]
}
];
function calculateAverageGrade(studentGrade:number[]) {
    let average = studentGrade.reduce((a,b) => a+b ) / studentGrade.length
    return Math.floor(average)
};
students.forEach((student) => { 
    console.log(`Student Name: ${student.name}, Average Grade: ${calculateAverageGrade(student.grades)}`);
 });
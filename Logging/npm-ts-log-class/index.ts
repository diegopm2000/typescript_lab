import StudentComponent from './src/studentComponent'

const stud = new StudentComponent('John Doe', 1000, 98, 3);

stud.addExam(200);
stud.addExam(90);
stud.grantScholarship(1000);
stud.fine();
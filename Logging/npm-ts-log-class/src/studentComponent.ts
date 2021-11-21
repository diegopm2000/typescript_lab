import log from 'ts-log-class';
 
@log()
export default class StudentComponent {
 
  name: string;
  debt: number;
  avgGrade: number;
  examsNumber = 0;
 
  constructor(name: string, debt: number, avgGrade: number, examsNumber: number) {
    console.log(`Hi ${name}`);
 
    this.name = name;
    this.debt = debt;
    this.avgGrade = avgGrade;
    this.examsNumber = examsNumber;
  }
 
  addExam(grade: number): void {
    if (grade < 0 || grade > 100) {
       console.log('invalid grade');
       return;
    }
 
    this.avgGrade = (this.avgGrade * this.examsNumber + grade) / ++this.examsNumber;
  }
 
  fine(): void {
    this.debt *= 1.1;
  }
 
  grantScholarship(dollars: number): void {
    this.debt += dollars;
  }
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name: string = '';
  phone: number | undefined;
  status : string = '';
  studentsArray : any = [];

  insertIntoDB() {
    alert('after submit');
    alert(this.name + " "+ this.phone+ " "+ this.status);
    this.studentsArray.push({
      name : this.name,
      phone : this.phone,
      status : this.status
    })
    console.log(this.studentsArray);
    this.name = '';
    this.phone = undefined;
    this.status = '';
  }
  deleteDB(id: any) {
    alert('deleted')
  

  }
  updateDB (id: any, name : any, phone: any, status: any) {
    
    alert("update");
    alert(name);
    console.log(name,id,phone,status);
    this.name = name;
    this.phone = phone;
    this.status = status;

  }
}

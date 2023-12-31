import { Component, OnInit, ViewChild } from '@angular/core';
import { Student, Representative } from './student';
import { StudentService } from './studentservice';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-student-table-list',
  templateUrl: './student-table-list.component.html',
  styleUrls: ['./appdemo.scss']
})
export class StudentTableListComponent implements OnInit { 
  students: Student[];

  selectedStudents: Student[];

  representatives: Representative[];

  statuses: any[];

  loading: boolean = true;

  @ViewChild('dt')
  table!: Table;

  constructor(private studentService: StudentService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      this.studentService.getStudentsLarge().then(students => {
          this.students = students;
          this.loading = false;
      });

      this.representatives = [
          {name: "Amy Elsner", image: 'amyelsner.png'},
          {name: "Anna Fali", image: 'annafali.png'},
          {name: "Asiya Javayant", image: 'asiyajavayant.png'},
          {name: "Bernardo Dominic", image: 'bernardodominic.png'},
          {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
          {name: "Ioni Bowcher", image: 'ionibowcher.png'},
          {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
          {name: "Onyama Limba", image: 'onyamalimba.png'},
          {name: "Stephen Shaw", image: 'stephenshaw.png'},
          {name: "XuXue Feng", image: 'xuxuefeng.png'}
      ];

      this.statuses = [
          {label: 'Unqualified', value: 'unqualified'},
          {label: 'Qualified', value: 'qualified'},
          {label: 'New', value: 'new'},
          {label: 'Negotiation', value: 'negotiation'},
          {label: 'Renewal', value: 'renewal'},
          {label: 'Proposal', value: 'proposal'}
      ]
      this.primengConfig.ripple = true;
  }

  onActivityChange(event: { target: { value: any; }; }) {
      const value = event.target.value;
      if (value && value.trim().length) {
          const activity = parseInt(value);

          if (!isNaN(activity)) {
              this.table.filter(activity, 'activity', 'gte');
          }
      }
  }

  onDateSelect(value: any) {
      this.table.filter(this.formatDate(value), 'date', 'equals')
  }

  formatDate(date: { getMonth: () => number; getDate: () => any; getFullYear: () => string; }) {
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (month < 10) {
          //month = '0' + month;
      }

      if (day < 10) {
          day = '0' + day;
      }

      return date.getFullYear() + '-' + month + '-' + day;
    }

    onRepresentativeChange(event: { value: any; }) {
      this.table.filter(event.value, 'representative', 'in')
  }

}

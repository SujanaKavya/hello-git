import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable()
export class StudentService {
    constructor(private http: HttpClient) { }

    getStudentsLarge() {
        return this.http.get<any>('assets/students-large.json')
            .toPromise()
            .then(res => <Student[]>res.data)
            .then(data => { return data; });
    }
}
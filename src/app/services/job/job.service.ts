import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  getJobs() {
    return this.http.get('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=1&search=code');
  }
}
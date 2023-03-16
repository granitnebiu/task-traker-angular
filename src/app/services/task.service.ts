import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Task } from '../Task'
// import { TASKS } from '../mock-tasks'
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'
  constructor(private httpNit:HttpClient) { }

  getTasks(): Observable<Task[]>{
    return this.httpNit.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`
    return this.httpNit.delete<Task>(url)
  }
}

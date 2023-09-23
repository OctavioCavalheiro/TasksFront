import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { API_CONFIG } from "../Configuration/config";
import { Injectable } from "@angular/core";
import { Tasks } from "../Models/tasks";

@Injectable({
    providedIn: 'root',
})


export class TasksService {
    constructor (private http: HttpClient){}
    listAllTasks(): Observable<Tasks[]>{
        return this.http.get<Tasks[]>(`${API_CONFIG.baseUrl}/tasks`);
    }
}
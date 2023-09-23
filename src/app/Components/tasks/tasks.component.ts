import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/Models/tasks';
import { TasksService } from 'src/app/Services/tasks.services';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Tasks[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.tasksService.listAllTasks().subscribe(
      (tasks) => {
        this.tasks = tasks;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

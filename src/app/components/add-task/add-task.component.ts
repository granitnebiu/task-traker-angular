import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = "";
  day: string = ""; 
  reminder: boolean = false;

  onSubmit(){
    if(!this.text){
      alert('please add a task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day, 
      reminder: this.reminder
    }

    //@todo - emit event 
    this.onAddTask.emit(newTask);

    //to clear form 
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
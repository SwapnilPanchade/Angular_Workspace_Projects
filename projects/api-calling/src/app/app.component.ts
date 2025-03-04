import { Component } from '@angular/core';
import { DummyDataService } from './services/dummy-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'API_Calling';

  todo: any;

  constructor(private dummySevice: DummyDataService) {}

  getData() {
    this.dummySevice.fetchData().subscribe((data) => (this.todo = data.todos));
  }
}

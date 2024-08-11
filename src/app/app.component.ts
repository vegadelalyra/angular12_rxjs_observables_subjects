import { Component } from '@angular/core';
import { DataService } from './services/data-service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [DataService],
})
export class AppComponent {
  title = 'angular12-rxjs-subjects';

  constructor(private dataService: DataService) {}
}

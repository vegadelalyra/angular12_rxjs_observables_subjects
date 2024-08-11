import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.sass'],
})
export class Comp2Component implements OnInit {
  inputText: string = 'vega de la lyra';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.dataEmitter.subscribe((value: string) => {
      this.inputText = value;
    });
  }
}

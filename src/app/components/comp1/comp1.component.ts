import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.sass'],
})
export class Comp1Component implements OnInit {
  enteredText: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  OnBtnClick() {
    this.dataService.raiseDataEmitterEvent(this.enteredText);
  }
}

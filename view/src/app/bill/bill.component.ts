import { Component, Input, OnInit } from '@angular/core';
import { delayWhen } from 'rxjs';
import { FoodItem } from '../menu/menu-fooditem.model';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
})
export class BillComponent implements OnInit {
  @Input() foss: Array<FoodItem> = [];
  @Input() c: number = 0;

  public count: number = this.c;

  constructor() { }
  remove(fun: FoodItem) {
    const startIndex = this.foss.indexOf(fun);
    const deleteCount = 1;
    this.count = this.count - this.foss[startIndex].item_cost;
    if (startIndex !== -1) {
      this.foss.splice(startIndex, deleteCount);
    }

    console.log(this.foss);
  }
  ngOnInit(): void {
    console.log(typeof this.foss);
  }
  Pay() {
    alert('Thank you visit again!')
  }
}

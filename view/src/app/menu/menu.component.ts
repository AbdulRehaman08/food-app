import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodItem } from './menu-fooditem.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private http: HttpClient, private route: Router) { }
  public fooditem: FoodItem[] = [];
  public foodlistbill: FoodItem[] = [];

  ngOnInit(): void {
    this.getfooditems();
  }
  public arrayid: Array<number> = [];
  public arrayname: Array<String> = [];
  public fos: Array<FoodItem> = [];
  public count: number = 0;
  passid(id: number, name: String, foody: FoodItem) {
    this.arrayid.push(id);
    this.arrayname.push(name);
    this.fos.push(foody);
    this.count = this.count + foody.item_cost;
  }
  getfooditems() {
    this.http.get<FoodItem[]>('/api/getmenu').subscribe((response) => {
      this.fooditem = response;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Green Tea Mochi', 'Yummy Mochi flavored with Matcha Poweder', 'http://finedininglovers.cdn.crosscast-system.com/BlogPost/l_13010_green-tea-mochi.jpg'),
    new Recipe('Green Tea Mochi', 'Yummy Mochi flavored with Matcha Poweder', 'http://finedininglovers.cdn.crosscast-system.com/BlogPost/l_13010_green-tea-mochi.jpg'),
    new Recipe('Green Tea Mochi', 'Yummy Mochi flavored with Matcha Poweder', 'http://finedininglovers.cdn.crosscast-system.com/BlogPost/l_13010_green-tea-mochi.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

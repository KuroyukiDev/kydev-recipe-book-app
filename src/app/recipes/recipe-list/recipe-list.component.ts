import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Green Tea Mochi', 'Yummy Mochi flavored with Matcha Powder!', 'http://finedininglovers.cdn.crosscast-system.com/BlogPost/l_13010_green-tea-mochi.jpg'),
    new Recipe('Yakisoba with Chicken', 'Japanese buckwheat flour noodles with chicken at their best!', 'https://images.media-allrecipes.com/userphotos/560x315/2220105.jpg'),
    new Recipe('Beef Kushiyaki', 'A Japanese favorite!', 'https://images.media-allrecipes.com/userphotos/560x315/879272.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

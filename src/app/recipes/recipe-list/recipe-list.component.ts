import { Component, OnInit,EventEmitter,Output } from '@angular/core';

import {Recipe} from '../recipe';
import {RecipeService} from '../recipe.service';


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] ; 
  @Output()recipeSelected = new EventEmitter<Recipe>();
  


  constructor(private receipeService:RecipeService) { }

  ngOnInit() {
    this.recipes = this.receipeService.getRecipes();
  }


  onSelected(recipe: Recipe){
this.recipeSelected.emit(recipe);

  }
}
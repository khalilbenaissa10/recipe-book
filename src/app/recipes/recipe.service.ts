import { Injectable } from '@angular/core';

import {Recipe} from './recipe';
import {Ingredient} from '../shared/ingredient';

@Injectable()
export class RecipeService {
  recipes:Recipe[] = [
    new Recipe('Summer Salad','very delicious salad','http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg',[
    new Ingredient('French Fries',2),
    new Ingredient('Beef Meat',1)

    ]),
    new Recipe('Schnitzel','very tasty','http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',[])
  ]; 

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(id:number){
    return this.recipes[id];

  }

  deleteRecipe(recipe:Recipe){
    this.recipes.splice(this.recipes.indexOf(recipe),1);
  }

}

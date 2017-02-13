import { Injectable } from '@angular/core';

import {Recipe} from './recipe';

@Injectable()
export class RecipeService {
  recipes:Recipe[] = [
    new Recipe('Summer Salad','very delicious salad','http://cdn.iowagirleats.com/wp-content/uploads/2013/05/Triple-Berry-Summer-Salad-03_mini.jpg',[]),
    new Recipe('Schnitzel','very tasty','http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',[])
  ]; 

  constructor() { }

  getRecipes(){
    return this.recipes;
  }

}

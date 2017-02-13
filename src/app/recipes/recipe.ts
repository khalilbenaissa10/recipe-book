import {Ingredient} from "../shared/Ingredient";
export class Recipe {
    constructor(public name, public description, public imagePath,public ingredients : Ingredient[]){}
}

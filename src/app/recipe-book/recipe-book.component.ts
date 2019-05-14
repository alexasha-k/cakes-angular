import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {

  recipeIngredients = [
    {ingredientName: 'dry yeast', ingredientQuantity: 11, ingredientUnit: 'g'},
    {ingredientName: 'milk 3%', ingredientQuantity: 60, ingredientUnit: 'g'},
    {ingredientName: 'white sugar', ingredientQuantity: 15, ingredientUnit: 'g'},
    {ingredientName: 'butter room temperature', ingredientQuantity: 115, ingredientUnit: 'g'},
    {ingredientName: 'milk 3%', ingredientQuantity: 125, ingredientUnit: 'g'},
    {ingredientName: 'eggs', ingredientQuantity: 1, ingredientUnit: 'item'},
    {ingredientName: 'flour', ingredientQuantity: 450, ingredientUnit: 'g'},
    {ingredientName: 'apples', ingredientQuantity: 4, ingredientUnit: 'item'},
    {ingredientName: 'brown sugar', ingredientQuantity: 100, ingredientUnit: 'g'},
    {ingredientName: 'ground cinnamon', ingredientQuantity: 10, ingredientUnit: 'g'},
    {ingredientName: 'cream cheese', ingredientQuantity: 150, ingredientUnit: 'g'},
    {ingredientName: 'butter room temperature', ingredientQuantity: 40, ingredientUnit: 'g'},
    {ingredientName: 'confectioners\' sugar', ingredientQuantity: 120, ingredientUnit: 'g'},

  ]

  portions: number = 1;

  setPortion(evt, initialVal?) {
    if (!initialVal) return this.portions = evt;
    this.portions = (evt / initialVal)
  }

  constructor() { }

  ngOnInit() {
  }

}

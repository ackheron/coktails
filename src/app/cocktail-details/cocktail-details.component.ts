import { Component } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface.js';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss',
})
export class CocktailDetailsComponent {
  cocktail: Cocktail = {
    name: 'Garibaldi',
    img: 'https://www.destinationcocktails.fr/wp-content/uploads/2024/08/cocktail-garibaldi.jpg.webp',
    description:
      'Découvrez ce cocktail italien composé uniquement de deux ingrédients : Campari et jus d’orange. Parfait pour un brunch ou lors de l’apéro, ce cocktail rafraîchissant et faible en alcool est à la fois fruité et légèrement amer.',
  };
  constructor() {}
}

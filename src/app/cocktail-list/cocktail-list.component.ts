import { Component } from '@angular/core';
import { Cocktail } from '../interfaces/cocktail.interface.js';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
})
export class CocktailListComponent {
  cocktails: Cocktail[] = [
    {
      name: 'Garibaldi',
      img: 'https://www.destinationcocktails.fr/wp-content/uploads/2024/08/cocktail-garibaldi.jpg.webp',
      description:
        'Découvrez ce cocktail italien composé uniquement de deux ingrédients : Campari et jus d’orange. Parfait pour un brunch ou lors de l’apéro, ce cocktail rafraîchissant et faible en alcool est à la fois fruité et légèrement amer.',
    },
    {
      name: 'On The Rocks',
      img: 'https://www.destinationcocktails.fr/wp-content/uploads/2024/07/cocktail-on-the-rocks.jpg.webp',
      description:
        'Découvrez le On the Rocks, un cocktail signature élégant et sophistiqué qui marie la douceur et la complexité de la liqueur de poire Golden Eight® avec la richesse fruitée des Griottines®. Ce cocktail offre des arômes délicats de vanille et de caramel ainsi qu’une touche fruitée et légèrement alcoolisée des cerises rehausse le caractère du cocktail. Ce mélange harmonieux est parfait pour ceux qui apprécient les saveurs raffinées et équilibrées.',
    },
    {
      name: 'Hemingway Special',
      img: 'https://www.destinationcocktails.fr/wp-content/uploads/2023/12/cocktail-hemingway-special.jpg.webp',
      description:
        'Découvrez ce cocktail à base de rhum et de liqueur de marasquin aux touches acidulées et amères.',
    },
  ];
}

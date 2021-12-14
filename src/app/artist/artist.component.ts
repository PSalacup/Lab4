import { Component, OnInit } from '@angular/core';

interface IArtistCard {
  id?: number;
  image_url: string;
  full_name: string;
  num_sales: number;
}
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artists: Array<IArtistCard> = [];
  constructor() { }

  ngOnInit() {
    this.artists = [
      {
        image_url: 'assets/img/artists/1.jpg',
        full_name: 'Piscasso',
        num_sales: 99
      },
      {
        image_url: 'assets/img/artists/99.jpg',
        full_name: 'Raphael',
        num_sales: 98
      },
      {
        image_url: 'assets/img/artists/19.jpg',
        full_name: 'Van Gogh',
        num_sales: 91
      },
      {
        image_url: 'assets/img/artists/95.jpg',
        full_name: 'Botticelli',
        num_sales: 93
      },
      {
        image_url: 'assets/img/artists/29.jpg',
        full_name: 'Klimt',
        num_sales: 92
      },
      {
        image_url: 'assets/img/artists/2.jpg',
        full_name: 'Matisse',
        num_sales: 87
      },
      {
        image_url: 'assets/img/artists/98.jpg',
        full_name: 'Michelangelo',
        num_sales: 85
      },
      {
        image_url: 'assets/img/artists/106.jpg',
        full_name: 'Vermeer',
        num_sales: 86
      },
      {
        image_url: 'assets/img/artists/97.jpg',
        full_name: 'Da Vinci',
        num_sales: 82
      },
      {
        image_url: 'assets/img/artists/21.jpg',
        full_name: 'Cezanne',
        num_sales: 81
      },
      {
        image_url: 'assets/img/artists/17.jpg',
        full_name: 'Monet',
        num_sales: 80
      },
      {
        image_url: 'assets/img/artists/101.jpg',
        full_name: 'Caravaggio',
        num_sales: 79
      }
    ]
  }

}

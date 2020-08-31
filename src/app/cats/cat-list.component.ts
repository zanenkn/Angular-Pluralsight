import { Component } from '@angular/core'

@Component({
  selector: 'cats',
  templateUrl: './cat-list.component.html'
})

export class CatListComponent {
  pageTitle: string = 'Cat List'
  imageWidth: number = 100
  imageMargin: number= 2 
  cats: any[] = [
    {
      "catId": 1,
      "catName": "Leif",
      "catCode": "CAT-001",
      "available": "August 1, 2020",
      "description": "Leif is a good boi",
      "price": 199,
      "starRating": 5,
      "imageUrl": "https://images.unsplash.com/photo-1579249586218-caeca90b2d69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
    },
    {
      "catId": 2,
      "catName": "Kisse",
      "catCode": "CAT-002",
      "available": "November 28, 2020",
      "description": "This cat does what she wants",
      "price": 229,
      "starRating": 3.4,
      "imageUrl": "https://images.unsplash.com/photo-1579983604605-020b903a8dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    }
  ]
}
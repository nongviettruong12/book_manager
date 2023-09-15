import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoBook } from 'src/app/interface/book';
import { BookService } from 'src/app/service/book.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailBookComponent {
    book: InfoBook = {
      name:"",
      price:0,
      image:"",
      description:"",
      author:"",
      genres:"",
      rate:"",
    }
    constructor(private Route:ActivatedRoute, private BookService: BookService){
      this.Route.paramMap.subscribe(params =>{
        const _id = Number(params.get('id'));
        this.BookService.getOneBook(_id).subscribe(book =>{
          this.book = book
        },error => console.log(error.message));  
      })
    }
}


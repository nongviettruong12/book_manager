import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoBook } from '../interface/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getBook():Observable<InfoBook[]>{
    return this.http.get<InfoBook[]>(`http://localhost:3000/books`)
  }
  getOneBook(id:number | string):Observable<InfoBook>{
    return this.http.get<InfoBook>(`http://localhost:3000/books/${id}`)
  }
  addBook(book:InfoBook):Observable<InfoBook[]>{
    return this.http.post<InfoBook[]>(`http://localhost:3000/books/add`, book)
  }
  deleteBook(_id:number | string):Observable<InfoBook>{
    return this.http.delete<InfoBook>(`http://localhost:3000/books/${_id}`)
  }
  updateBook(book:InfoBook):Observable<InfoBook>{
    return this.http.put<InfoBook>(`http://localhost:3000/books/${book._id}`, book)
  }
}

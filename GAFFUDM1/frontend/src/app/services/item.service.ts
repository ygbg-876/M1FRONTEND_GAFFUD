import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl = 'https://localhost:7004/api/item';

  constructor(private http: HttpClient) { }

  getAllItems() {
    return this.http.get<Item[]>(`${this.apiUrl}/list`);
  }

  getItem(id: number) {
    return this.http.get<Item>(`${this.apiUrl}/${id}`);
  }

  addItem(item: Item) {
    return this.http.post(`${this.apiUrl}/add`, item, { responseType: 'text' });
  }

  updateItem(id: number, item: Item) {
    return this.http.put(`${this.apiUrl}/update/${id}`, item, { responseType: 'text' });
  }

  deleteItem(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`, { responseType: 'text' });
  }
}
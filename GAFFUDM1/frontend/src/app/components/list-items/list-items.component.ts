import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  items?: Item[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.itemService.getAllItems().subscribe({
      next: (data: Item[]) => {
        this.items = data;
        console.log(this.items);
      },
      error: (err) => console.log(err)
    });
  }

  deleteItem(id: number | undefined): void {
    if (!id) return;
    if (confirm('Are you sure you want to delete this item?')) {
      this.itemService.deleteItem(id).subscribe({
        next: () => {
          alert('Item deleted.');
          this.loadItems();
        },
        error: (err) => console.log(err)
      });
    }
  }
}
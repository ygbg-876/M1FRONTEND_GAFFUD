import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  item: Item = {};

  constructor(
    private itemService: ItemService,
    private router: Router
  ) { }

  onSubmit(): void {
    this.itemService.addItem(this.item).subscribe({
      next: () => {
        alert('Item added successfully!');
        this.router.navigate(['/']);
      },
      error: (err) => console.log(err)
    });
  }
}
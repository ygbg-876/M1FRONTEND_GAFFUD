import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  item: Item = {};
  id?: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadItem();
  }

  loadItem(): void {
    if (!this.id) return;
    this.itemService.getItem(this.id).subscribe({
      next: (data: Item) => {
        this.item = data;
      },
      error: (err) => console.log(err)
    });
  }

  onSubmit(): void {
    if (!this.id) return;
    this.itemService.updateItem(this.id, this.item).subscribe({
      next: () => {
        alert('Item updated successfully!');
        this.router.navigate(['/']);
      },
      error: (err) => console.log(err)
    });
  }
}
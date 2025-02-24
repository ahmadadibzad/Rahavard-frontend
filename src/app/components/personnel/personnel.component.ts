import { Component, inject, OnInit } from '@angular/core';
import { PersonnelService } from '../../services/personnelService';
import { PersonnelDto } from '../../models/personnelDto.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-personnel',
  imports: [RouterModule],
  templateUrl: './personnel.component.html',
  styleUrl: './personnel.component.scss'
})
export class PersonnelComponent implements OnInit {
  personnelService = inject(PersonnelService);
  list: PersonnelDto[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.personnelService.getAll()
      .subscribe(
        {
          next: data => this.list = data,
          error: err => console.error(err)
        });
  }
}

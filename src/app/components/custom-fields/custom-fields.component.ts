import { Component, inject, OnInit } from '@angular/core';
import { CustomFieldDto } from '../../models/customFieldDto.model';
import { CustomFieldService } from '../../services/customFieldService';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-fields',
  imports: [ReactiveFormsModule],
  templateUrl: './custom-fields.component.html',
  styleUrl: './custom-fields.component.scss'
})
export class CustomFieldsComponent implements OnInit {
  private customFieldService = inject(CustomFieldService);
  list: CustomFieldDto[] = [];
  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.generateForm();
    this.getAll();
  }

  generateForm() {
    this.form = new FormGroup({
      name: new FormControl(null, { validators: [Validators.required] }),
      type: new FormControl(null, { validators: [Validators.required] })
    });
  }

  getAll(): void {
    this.customFieldService.getAll()
      .subscribe(
        {
          next: data => this.list = data,
          error: err => console.error(err)
        });
  }

  add() {
    if (this.form.invalid) {
      return;
    }

    this.customFieldService.add(this.form.value)
      .subscribe({
        next: data => {
          console.log(data);
          this.getAll();
        },
        error: err => console.error(err)
      });
  }
}

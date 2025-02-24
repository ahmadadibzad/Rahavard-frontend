import { PersonnelService } from './../../../services/personnelService';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPersonnelDto } from '../../../models/personnelDto.model';
import { CustomFieldValueDto } from '../../../models/customFieldValueDto.model';
import { CustomFieldService } from '../../../services/customFieldService';
import { CustomFieldDto, FieldType } from '../../../models/customFieldDto.model';
import { CommonModule, NgSwitch } from '@angular/common';

@Component({
  selector: 'app-add-personnel',
  imports: [ReactiveFormsModule, FormsModule, CommonModule, NgSwitch],
  templateUrl: './add-personnel.component.html',
  styleUrl: './add-personnel.component.scss'
})
export class AddPersonnelComponent implements OnInit {
  personnelService = inject(PersonnelService);
  private customFieldService = inject(CustomFieldService);
  customFieldsList: CustomFieldDto[] = [];
  customFieldValueDto: CustomFieldValueDto = new CustomFieldValueDto();

  form: AddPersonnelDto = {
    personnelCode: 0,
    firstName: '',
    lastName: '',
    customFieldValuesDto: []
  };

  dynamicField = {
    ...this.customFieldValueDto
  };

  dynamicFields?: any[] = [];
  fieldType = FieldType;
  selectedFieldType: number[] = [];

  constructor() {
    this.getCustomFields();
  }

  ngOnInit(): void {
  }

  getCustomFields(): void {
    this.customFieldService.getAll()
      .subscribe(
        {
          next: data => {
            this.customFieldsList = data;
            this.customFieldChange(0);
          },
          error: err => console.error(err)
        });
  }

  getCustomFieldTypeById(id?: number) {
    return this.customFieldsList.find(c => c.id === id)?.type;
  }

  addInput() {
    console.log(this.dynamicField)
    //this.dynamicFields?.push({ ...this.customFieldValueDto });
    this.form.customFieldValuesDto?.push(new CustomFieldValueDto());
  }

  customFieldChange(index: number) {
    this.selectedFieldType[index] = this.customFieldsList.find(c => c.id == this.form.customFieldValuesDto[index]?.customFieldId)?.type || 1;
    console.log(FieldType[this.selectedFieldType[index]!])
  }

  submit() {
    const dto: AddPersonnelDto = { ...this.form }

    this.personnelService.add(dto)
      .subscribe({
        next: data => {
          console.log(data);
          //document.location.reload();
        },
        error: err => console.error(err)
      });
  }
}

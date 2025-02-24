import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './baseService';
import { CustomFieldDto, FieldType } from '../models/customFieldDto.model';

@Injectable({
  providedIn: 'root'
})
export class CustomFieldService extends BaseService {

  personnelList: CustomFieldDto[] = [];
  private httpClient = inject(HttpClient);

  constructor() {
    super();
  }

  getAll() {
    return this.httpClient.get<CustomFieldDto[]>(this.baseUrl + 'GetCustomFields');
  }

  add(dto: CustomFieldDto) {
    return this.httpClient.post(this.baseUrl + 'AddCustomField', {
      name: dto.name,
      type: dto.type
    });
  }
}

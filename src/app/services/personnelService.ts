import { inject, Injectable } from '@angular/core';
import { AddPersonnelDto, PersonnelDto } from '../models/personnelDto.model';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './baseService';

@Injectable({
  providedIn: 'root'
})
export class PersonnelService extends BaseService {

  personnelList: PersonnelDto[] = [];
  httpClient = inject(HttpClient);

  constructor() {
    super();
  }

  getAll() {
    return this.httpClient.get<PersonnelDto[]>(this.baseUrl + 'GetAllPersonnel');
  }

  add(dto: AddPersonnelDto) {
    return this.httpClient.post(this.baseUrl + 'AddPersonnel', {
      personnelCode: dto.personnelCode,
      firstName: dto.firstName,
      lastName: dto.lastName,
      customFieldValuesDto: dto.customFieldValuesDto
    });
  }
}

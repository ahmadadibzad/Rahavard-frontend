import { CustomFieldValueDto } from "./customFieldValueDto.model";

export class PersonnelDto {
    id?: number;
    personnelCode!: string;
    firstName!: string;
    lastName!: string;
    creationTime!: Date;
    modeficationTime!: Date;
}

export class AddPersonnelDto {
    id?: number;
    personnelCode!: number;
    firstName!: string;
    lastName!: string;
    creationTime?: string;
    customFieldValuesDto!: CustomFieldValueDto[]
}

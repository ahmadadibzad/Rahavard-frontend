export class CustomFieldValueDto {
    id?: number;
    displayName: string = '';
    value: string = '';
    customFieldId: number = 1;
    formId?: number;
    formula?: string
}
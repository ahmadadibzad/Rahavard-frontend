export class CustomFieldDto {
    id?: number;
    name!: string;
    type!: FieldType
}

export enum FieldType {
    String = 1,
    Numeric = 2,
    DateTime = 3
}

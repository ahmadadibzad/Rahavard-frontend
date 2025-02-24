import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CustomFieldsComponent } from './components/custom-fields/custom-fields.component';
import { PersonnelComponent } from './components/personnel/personnel.component';
import { AddPersonnelComponent } from './components/personnel/add-personnel/add-personnel.component';

export const routes: Routes = [
    { path: 'customfields', component: CustomFieldsComponent },
    { path: 'personnel', component: PersonnelComponent },
    { path: 'add-personnel', component: AddPersonnelComponent },
    //{ path: '**', component: HomeComponent, pathMatch: 'full' },
];

import { Routes } from '@angular/router';
import { ListExpensesComponent } from './list-expenses/list-expenses.component';
import { EnglishTeacherComponent } from './english-teacher/english-teacher.component';

export const routes: Routes = [
    { path: 'list-expenses', component: ListExpensesComponent },
    { path: 'teacher', component: EnglishTeacherComponent}
];

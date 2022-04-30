import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'

import { AppComponent } from './app.component';
import { CourseListComponent } from './Components/course-list/course-list.component';
import { SubjectListComponent } from './Components/subject-list/subject-list.component';
import { CourseService } from './Services/course.service';
import { FormatPipe } from './Pipes/format.pipe';
import { DeleteDialogComponent } from './Components/delete-dialog/delete-dialog.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CourseListComponent, },
  { path: 'subjects', component: SubjectListComponent },
  { path: '**', redirectTo:'/courses' }
]

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    SubjectListComponent,
    FormatPipe,
    DeleteDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

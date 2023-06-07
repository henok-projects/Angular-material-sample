import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { DishdetailComponent } from './component/dishdetail/dishdetail.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { EmployeeComponent } from './component/employee/employee.component';

import { DishService } from './service/dish/dish.service';
import { LeaderService } from './service/leader/leader.service';
import { PromotionService } from './service/promotion/promotion.service';
import { LoginComponent } from './component/login/login.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { EmployeeService } from './service/employee/employee.service';
import { EditModalComponent } from './modals/edit-modal/edit-modal.component';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';
import { AddModalComponent } from './modals/add-modal/add-modal.component';
import { EmployeeData } from './shared/employeData';
import { EmployeeUserData } from './shared/EmployeeUserData';
import { EmployeeUserComponent } from './modals/manage-user/employee-user/employee-user.component';
import { UploadFileComponent } from './component/upload-file/upload-file/upload-file.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    EmployeeComponent,
    EditModalComponent,
    DeleteModalComponent,
    AddModalComponent,
    EmployeeUserComponent,
    UploadFileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(EmployeeData),
    //InMemoryWebApiModule.forRoot(EmployeeUserData),
    HttpClientModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule,
  ],
  providers: [DishService, PromotionService, LeaderService, EmployeeService],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

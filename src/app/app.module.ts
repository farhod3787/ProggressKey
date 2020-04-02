import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import {MatInputModule} from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './website/navbar/navbar.component';
import { FooterComponent } from './website/footer/footer.component';
import { NewsComponent } from './website/news/news.component';
import { ProductComponent } from './website/product/product.component';
import { GalleryComponent } from './website/gallery/gallery.component';
import { ContactComponent } from './website/contact/contact.component';
import { DepartmentStoresComponent } from './website/department-stores/department-stores.component';
import { ProductAboutComponent } from './website/product-about/product-about.component';
import { HomeComponent } from './website/home/home.component';
import { NewsAboutComponent } from './website/news-about/news-about.component';
import { NewProductComponent } from './website/new-product/new-product.component';
import { TopProductComponent } from './website/top-product/top-product.component';
import { PopularProductComponent } from './website/popular-product/popular-product.component';
import { AllProductComponent } from './website/all-product/all-product.component';
import { ManyProductComponent } from './website/many-product/many-product.component';
import { UserComponent } from './user/user/user.component';
import { UserTeamComponent } from './user/user-team/user-team.component';
import { TransferComponent } from './user/transfer/transfer.component';
import { UserSettingComponent } from './user/user-setting/user-setting.component';
import { UserResultComponent } from './user/user-result/user-result.component';
import { UserInformationComponent } from './user/user-information/user-information.component';
import { UserNotesComponent } from './user/user-notes/user-notes.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminBlogComponent } from './admin/admin-blog/admin-blog.component';
import { ManagerComponent } from './manager/manager/manager.component';
import { ManagerHomeComponent } from './manager/manager-home/manager-home.component';
import { ManagerBlogComponent } from './manager/manager-blog/manager-blog.component';
import { RegisterComponent } from './register/register/register.component';
import { RegisterHomeComponent } from './register/register-home/register-home.component';
import { RegisterBlogComponent } from './register/register-blog/register-blog.component';
import { BinarComponent } from './user/binar/binar.component'; 
import { LoginComponent } from './website/login/login.component';
import { ErrorComponent } from './website/error/error.component';
import { SignComponent } from './website/sign/sign.component';
import { TransferHistoryComponent } from './user/transfer-history/transfer-history.component';
import { ProductBuyComponent } from './user/product-buy/product-buy.component';
import { TransferHomeComponent } from './user/transfer-home/transfer-home.component';
import { TransferAboutComponent } from './user/transfer-about/transfer-about.component';
import { RegistratorComponent } from './admin/registrator/registrator.component';
import { ClientComponent } from './admin/client/client.component';
import { ClientAddComponent } from './admin/client-add/client-add.component';
import { RegistratorAddComponent } from './admin/registrator-add/registrator-add.component';
import { SiteManagementComponent } from './admin/site-management/site-management.component'; 
import { WarehouseComponent } from './admin/warehouse/warehouse.component';
import { RegistratorHomeComponent } from './admin/registrator-home/registrator-home.component';
import { ClientHomeComponent } from './admin/client-home/client-home.component';
import { WarehouseHomeComponent } from './admin/warehouse-home/warehouse-home.component';
import { WarehouseAddComponent } from './admin/warehouse-add/warehouse-add.component';
import { PurchasedProductComponent } from './user/purchased-product/purchased-product.component';
import { AdminSignComponent } from './admin/admin-sign/admin-sign.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NewsComponent,
    ProductComponent,
    GalleryComponent,
    ContactComponent,
    DepartmentStoresComponent,
    ProductAboutComponent,
    HomeComponent,
    NewsAboutComponent,
    NewProductComponent,
    TopProductComponent,
    PopularProductComponent,
    AllProductComponent,
    ManyProductComponent,
    UserComponent,
    UserTeamComponent,
    TransferComponent,
    UserSettingComponent,
    UserResultComponent,
    UserInformationComponent,
    UserNotesComponent,
    UserHomeComponent,
    AdminComponent,
    AdminHomeComponent,
    AdminBlogComponent,
    ManagerComponent,
    ManagerHomeComponent,
    ManagerBlogComponent,
    RegisterComponent,
    RegisterHomeComponent,
    RegisterBlogComponent,
    BinarComponent, 
    LoginComponent,
    ErrorComponent,
    SignComponent,
    TransferHistoryComponent,
    ProductBuyComponent,
    TransferHomeComponent,
    TransferAboutComponent,
    RegistratorComponent,
    ClientComponent,
    ClientAddComponent,
    RegistratorAddComponent,
    SiteManagementComponent, 
    WarehouseComponent,
    RegistratorHomeComponent,
    ClientHomeComponent,
    WarehouseHomeComponent,
    WarehouseAddComponent,
    PurchasedProductComponent,
    AdminSignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatInputModule,
    MatSliderModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

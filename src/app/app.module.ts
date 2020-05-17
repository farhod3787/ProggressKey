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
import {MatCheckboxModule} from '@angular/material/checkbox';
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
import { RequestedProductsComponent } from './admin/requested-products/requested-products.component';
import { ShippedProductsComponent } from './admin/shipped-products/shipped-products.component';
import { RegisterSettingComponent } from './register/register-setting/register-setting.component';
import { RegisterWarehouseComponent } from './register/register-warehouse/register-warehouse.component';
import { RegisterClientComponent } from './register/register-client/register-client.component';
import { RegisterClienthomeComponent } from './register/register-clienthome/register-clienthome.component';
import { RegisterClientAddComponent } from './register/register-client-add/register-client-add.component';
import { ManagerNewsAddComponent } from './manager/manager-news-add/manager-news-add.component';
import { ManagerGalleryAddComponent } from './manager/manager-gallery-add/manager-gallery-add.component';
import { ManagerCustomersComponent } from './manager/manager-customers/manager-customers.component';
import { ManagerSettingsComponent } from './manager/manager-settings/manager-settings.component';
import { AdminSettingComponent } from './admin/admin-setting/admin-setting.component';
import { RegisterSignComponent } from './register/register-sign/register-sign.component';
import { RegisterOrderComponent } from './register/register-order/register-order.component';
import { RegisterSendProductComponent } from './register/register-send-product/register-send-product.component';
import { NotFoundComponent } from './website/not-found/not-found.component';
import { RegisterAcceptedProdComponent } from './register/register-accepted-prod/register-accepted-prod.component';


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
    AdminSignComponent,
    RequestedProductsComponent,
    ShippedProductsComponent,
    RegisterSettingComponent,
    RegisterWarehouseComponent,
    RegisterClientComponent,
    RegisterClienthomeComponent,
    RegisterClientAddComponent,
    ManagerNewsAddComponent,
    ManagerGalleryAddComponent,
    ManagerCustomersComponent,
    ManagerSettingsComponent,
    AdminSettingComponent,
    RegisterSignComponent,
    RegisterOrderComponent,
    RegisterSendProductComponent,
    NotFoundComponent,
    RegisterAcceptedProdComponent,
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
    MatCheckboxModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

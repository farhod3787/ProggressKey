import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentStoresComponent } from './website/department-stores/department-stores.component';
import { NavbarComponent } from './website/navbar/navbar.component';
import { HomeComponent } from './website/home/home.component';
import { NewsComponent } from './website/news/news.component';
import { ProductComponent } from './website/product/product.component';
import { ProductAboutComponent } from './website/product-about/product-about.component';
import { NewsAboutComponent } from './website/news-about/news-about.component';
import { GalleryComponent } from './website/gallery/gallery.component';
import { ContactComponent } from './website/contact/contact.component';
import { AllProductComponent } from './website/all-product/all-product.component';
import { TopProductComponent } from './website/top-product/top-product.component';
import { PopularProductComponent } from './website/popular-product/popular-product.component';
import { NewProductComponent } from './website/new-product/new-product.component';
import { ManyProductComponent } from './website/many-product/many-product.component';
import { UserComponent } from './user/user/user.component';
import { TransferComponent } from './user/transfer/transfer.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserTeamComponent } from './user/user-team/user-team.component';
import { UserInformationComponent } from './user/user-information/user-information.component';
import { UserResultComponent } from './user/user-result/user-result.component';
import { UserNotesComponent } from './user/user-notes/user-notes.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminBlogComponent } from './admin/admin-blog/admin-blog.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ManagerComponent } from './manager/manager/manager.component';
import { ManagerHomeComponent } from './manager/manager-home/manager-home.component';
import { ManagerBlogComponent } from './manager/manager-blog/manager-blog.component';
import { RegisterHomeComponent } from './register/register-home/register-home.component';
import { RegisterComponent } from './register/register/register.component';
import { RegisterBlogComponent } from './register/register-blog/register-blog.component';
import { bindNodeCallback } from 'rxjs';
import { BinarComponent } from './user/binar/binar.component';
import { SignComponent } from './website/sign/sign.component';
import { LoginComponent } from './website/login/login.component';
import { ErrorComponent } from './website/error/error.component';
import { TransferHistoryComponent } from './user/transfer-history/transfer-history.component';
import { ProductBuyComponent } from './user/product-buy/product-buy.component';
import { TransferHomeComponent } from './user/transfer-home/transfer-home.component';
import { TransferAboutComponent } from './user/transfer-about/transfer-about.component';
import { RegistratorAddComponent } from './admin/registrator-add/registrator-add.component';
import { RegistratorComponent } from './admin/registrator/registrator.component';
import { ClientAddComponent } from './admin/client-add/client-add.component';
import { ClientComponent } from './admin/client/client.component';
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
import { ManagerProductAddComponent } from './manager/manager-product-add/manager-product-add.component';
import { ManagerSettingsComponent } from './manager/manager-settings/manager-settings.component';
import { ManagerNewsAddComponent } from './manager/manager-news-add/manager-news-add.component';
import { ManagerCustomersComponent } from './manager/manager-customers/manager-customers.component';
import { ManagerGalleryAddComponent } from './manager/manager-gallery-add/manager-gallery-add.component';
import { AdminSettingComponent } from './admin/admin-setting/admin-setting.component';
import { RegisterSignComponent } from './register/register-sign/register-sign.component';
import { RegisterOrderComponent } from './register/register-order/register-order.component';
import { RegisterSendProductComponent } from './register/register-send-product/register-send-product.component';
import { NotFoundComponent } from './website/not-found/not-found.component';
import { RegisterAcceptedProdComponent } from './register/register-accepted-prod/register-accepted-prod.component';
import { AdminWarehouseAboutComponent } from './admin/admin-warehouse-about/admin-warehouse-about.component';
import { AdminAddProductComponent } from './admin/admin-add-product/admin-add-product.component';
import { ManagerSignComponent } from './manager/manager-sign/manager-sign.component';
// import { ManagerProductAddComponent } from './manager-product-add/manager-product-add.component';


const routes: Routes = [

  {
    path : '', component : NavbarComponent, children: [
      { path: '', component: HomeComponent} ,
      {path: 'department-stores' , component: DepartmentStoresComponent},
      {path: 'news' , component: NewsComponent},
      {path: 'product' , component: ProductComponent},
      {path: 'product-about' , component: ProductAboutComponent},
      {path: 'news-about' , component: NewsAboutComponent},
      {path: 'gallery' , component: GalleryComponent},
      {path: 'contact' , component: ContactComponent},
      {path: 'all-product' , component: AllProductComponent, children: [
        {path: '' , component: NewProductComponent} ,
        {path: 'top' , component: TopProductComponent} ,
        {path: 'popular' , component: PopularProductComponent} ,
        {path: 'many' , component: ManyProductComponent}
      ]}
      ]
  },
  { path: 'sign', component: SignComponent} ,
  { path: 'admin-sign', component: AdminSignComponent} ,
  { path: 'register-sign', component: RegisterSignComponent} ,
  { path: 'manager-sign', component: ManagerSignComponent},
  { path: 'login', component: LoginComponent} ,
  { path: 'error', component: ErrorComponent} ,

  // User
{  path : 'user', component : UserComponent, children: [
    { path: '', component: UserHomeComponent} ,
    { path: 'user-team', component: UserTeamComponent} ,
    { path: 'user-information', component: UserInformationComponent} ,
    { path: 'user-result', component: UserResultComponent} ,
    { path: 'user-notes', component: UserNotesComponent} ,
    { path: 'transfer', component: TransferComponent , children: [
      { path: '', component: TransferAboutComponent } ,
      { path: 'transfer-history', component: TransferHistoryComponent} ,
      { path: 'product-buy', component: ProductBuyComponent} ,
       { path: 'transfer-about', component: TransferHomeComponent} ,
    ]
  } ,
    { path: 'binar', component: BinarComponent} ,
    {path: 'purchased-product' , component: PurchasedProductComponent},
  ]
},

// manager
{  path : 'manager', component : ManagerComponent , children: [
    { path: '', component: ManagerHomeComponent} ,
    { path: 'manager-blog', component: ManagerBlogComponent},
    { path: 'manager-product-add', component: ManagerProductAddComponent},
    { path: 'manager-news-add', component: ManagerNewsAddComponent},
    { path: 'manager-sittings', component: ManagerSettingsComponent},
    { path: 'manager-customers', component: ManagerCustomersComponent},
    { path: 'manager-gallery', component: ManagerGalleryAddComponent}
  ]
},

// admin
{  path : 'admin', component : AdminComponent , children: [
    { path: '', component: AdminHomeComponent} ,
    { path: 'manager-blog', component: AdminBlogComponent},
    { path: 'client', component: ClientHomeComponent , children: [
      { path: '', component: ClientComponent},
      { path: 'client-add', component: ClientAddComponent},
    ]
    },
    { path: 'registrator', component: RegistratorHomeComponent , children: [
      { path: '',  component: RegistratorComponent } ,
      { path: 'register-add', component: RegistratorAddComponent},
     ]},
    { path: 'site-manager', component: SiteManagementComponent},
    { path: 'settings', component: AdminSettingComponent},
    { path: 'warehouse', component: WarehouseHomeComponent , children: [
      { path: '',  component: WarehouseComponent } ,
      {path: 'warehosue-add' , component: WarehouseAddComponent},
      { path: 'about/:id', component: AdminWarehouseAboutComponent},
      { path: 'add-product/:id', component: AdminAddProductComponent}
    ]},

    {path: 'requested-products' , component: RequestedProductsComponent},
    {path: 'shipped-product' , component: ShippedProductsComponent},
  ]
},

// register
{  path : 'register', component : RegisterComponent , children: [
    { path: '', component: RegisterHomeComponent} ,
    { path: 'register-blog', component: RegisterBlogComponent},
    { path: 'register-setting', component: RegisterSettingComponent},
    { path: 'register-order', component: RegisterOrderComponent},
    { path: 'register-warehouse', component: RegisterWarehouseComponent},
    { path: 'register-accept', component: RegisterAcceptedProdComponent},
    { path: 'register-client', component: RegisterClienthomeComponent , children: [
      { path: '', component: RegisterClientComponent},
      { path: 'register-client-add', component: RegisterClientAddComponent},
    ]},
    { path: 'send-Products', component: RegisterSendProductComponent}
    ] },
    { path: '**', component: NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

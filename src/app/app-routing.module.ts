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
  { path: 'login', component: LoginComponent} ,
  { path: 'error', component: ErrorComponent} ,
  // User
{
  path : 'user', component : UserComponent, children: [
    { path: '', component: UserHomeComponent} ,
    { path: 'user-team', component: UserTeamComponent} ,
    { path: 'user-information', component: UserInformationComponent} ,
    { path: 'user-result', component: UserResultComponent} ,
    { path: 'user-notes', component: UserNotesComponent} ,
    { path: 'transfer', component: TransferComponent , children: [
      { path: ' ', component: TransferHomeComponent} ,
      { path: 'transfer-history', component: TransferHistoryComponent} ,
      { path: 'product-buy', component: ProductBuyComponent} ,
       { path: 'transfer-about', component: TransferAboutComponent} ,
    ]
  } ,
    { path: 'binar', component: BinarComponent} ,

  ]
},

// manager
{
  path : 'manager', component : ManagerComponent , children: [
    { path: '', component: ManagerHomeComponent} ,
    { path: 'manager-blog', component: ManagerBlogComponent}

  ]
},

// admin
{
  path : 'admin', component : AdminComponent , children: [
    { path: '', component: AdminHomeComponent} ,
    { path: 'manager-blog', component: AdminBlogComponent},
    { path: 'client', component: ClientComponent},
    { path: 'client-add', component: ClientAddComponent},
    { path: 'registrator', component: RegistratorComponent},
    { path: 'register-add', component: RegistratorAddComponent},
    { path: 'site-manager', component: SiteManagementComponent},

  ]
},

// manager
{
  path : 'register', component : RegisterComponent , children: [
    { path: '', component: RegisterHomeComponent} ,
    { path: 'manager-blog', component: RegisterBlogComponent}

  ]
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

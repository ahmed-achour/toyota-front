import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { AboutUsComponent } from './components/public/about-us/about-us.component';
import { CarsComponent } from './components/public/cars/cars.component';
import { LoginComponent } from './components/public/login/login.component';
import { HomeComponent } from './components/public/home/home.component';
import { Page404Component } from './components/public/page404/page404.component';
import { OutTeamComponent } from './components/public/out-team/out-team.component';
import { CarListComponent } from './components/private/shared/cars/car-list/car-list.component';
import { AddCarComponent } from './components/private/shared/cars/add-car/add-car.component';
import { UpdateCarComponent } from './components/private/shared/cars/update-car/update-car.component';
import { PapperListComponent } from './components/private/shared/papper/papper-list/papper-list.component';
import { AddPapperComponent } from './components/private/shared/papper/add-papper/add-papper.component';
import { UpdatePapperComponent } from './components/private/shared/papper/update-papper/update-papper.component';
import { StockListComponent } from './components/private/shared/stock/stock-list/stock-list.component';
import { AddStockComponent } from './components/private/shared/stock/add-stock/add-stock.component';
import { UpdateStockComponent } from './components/private/shared/stock/update-stock/update-stock.component';
import { ClientListComponent } from './components/private/shared/client/client-list/client-list.component';
import { AddClientComponent } from './components/private/shared/client/add-client/add-client.component';
import { UpdateClientComponent } from './components/private/shared/client/update-client/update-client.component';
import { UserListComponent } from './components/private/shared/user/user-list/user-list.component';
import { AddUserComponent } from './components/private/shared/user/add-user/add-user.component';
import { UpdateUserComponent } from './components/private/shared/user/update-user/update-user.component';
import { ProfileComponent } from './components/private/shared/client/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { IsAdminGuard } from './guards/is-admin.guard';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "achivements",
    component: AboutUsComponent
  },
  {
    path: "about",
    component: OutTeamComponent
  },
  {
    path: "profile/:id",
    component: ProfileComponent,
    canActivate:[AuthGuard]
    
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate:[AuthGuard,IsAdminGuard]
  },
  {
    path: "cars",
    component: CarsComponent

  }
  ,
  {
    path:"user-list",
    component: UserListComponent,
    canActivate:[AuthGuard,IsAdminGuard]
  },
  {
    path:"add-user",
    component: AddUserComponent,
    canActivate:[AuthGuard,IsAdminGuard]
  },
  {
    path:"update-user/:id",
    component: UpdateUserComponent,
    canActivate:[AuthGuard,IsAdminGuard]
  },
  {
    path:"client-list",
    component: ClientListComponent,
    canActivate:[AuthGuard,IsAdminGuard]
  },
  {
    path:"add-client",
    component: AddClientComponent,
    canActivate:[AuthGuard,IsAdminGuard]
  },
  {
    path:"update-client/:id",
    component: UpdateClientComponent,
    canActivate:[AuthGuard,IsAdminGuard]
  },
  {
    path:"cars-list",
    component: CarListComponent,
    canActivate:[AuthGuard,IsAdminGuard]
  },
  {
    path:"add-car",
    component: AddCarComponent,
    canActivate:[AuthGuard,IsAdminGuard]
  },
  {
    path:"update-car/:id",
    component: UpdateCarComponent,
    canActivate:[AuthGuard,IsAdminGuard]
  },
  {
    path:"stock-list",
    component: StockListComponent,
    canActivate:[AuthGuard,IsAdminGuard]
  },
  {
    path:"add-stock",
    component: AddStockComponent,
    canActivate:[AuthGuard,IsAdminGuard]
  },
  {
    path:"update-stock/:id",
    component: UpdateStockComponent,
    canActivate:[AuthGuard,IsAdminGuard]
  },
  {
    path:"user",
    component: UserListComponent,
    canActivate:[AuthGuard,IsAdminGuard]
  },
  {
    path:"add-user",
    component: AddUserComponent,
    canActivate:[AuthGuard,IsAdminGuard]
  },
  {
    path:"update-user/:id",
    component: UpdateUserComponent,
    canActivate:[AuthGuard,IsAdminGuard]
  },
  {
    path: "**",
    component: Page404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

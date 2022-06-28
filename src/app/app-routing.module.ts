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
    component: ProfileComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "cars",
    component: CarsComponent
  }
  ,
  {
    path:"user-list",
    component: UserListComponent
  },
  {
    path:"add-user",
    component: AddUserComponent
  },
  {
    path:"update-user/:id",
    component: UpdateUserComponent
  },
  {
    path:"client-list",
    component: ClientListComponent
  },
  {
    path:"add-client",
    component: AddClientComponent
  },
  {
    path:"update-client/:id",
    component: UpdateClientComponent
  },
  {
    path:"cars-list",
    component: CarListComponent
  },
  {
    path:"add-car",
    component: AddCarComponent
  },
  {
    path:"update-car/:id",
    component: UpdateCarComponent
  },
  {
    path:"stock-list",
    component: StockListComponent
  },
  {
    path:"add-stock",
    component: AddStockComponent
  },
  {
    path:"update-stock/:id",
    component: UpdateStockComponent
  },
  {
    path:"user",
    component: UserListComponent
  },
  {
    path:"add-user",
    component: AddUserComponent
  },
  {
    path:"update-user/:id",
    component: UpdateUserComponent
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

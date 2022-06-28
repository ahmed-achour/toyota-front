import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCarComponent } from './components/private/shared/cars/add-car/add-car.component';
import { CarListComponent } from './components/private/shared/cars/car-list/car-list.component';
import { UpdateCarComponent } from './components/private/shared/cars/update-car/update-car.component';
import { UpdateUserComponent } from './components/private/shared/user/update-user/update-user.component';
import { AddUserComponent } from './components/private/shared/user/add-user/add-user.component';
import { UserListComponent } from './components/private/shared/user/user-list/user-list.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { ClientListComponent } from './components/private/shared/client/client-list/client-list.component';
import { AddClientComponent } from './components/private/shared/client/add-client/add-client.component';
import { UpdateClientComponent } from './components/private/shared/client/update-client/update-client.component';
import { PapperListComponent } from './components/private/shared/papper/papper-list/papper-list.component';
import { AddPapperComponent } from './components/private/shared/papper/add-papper/add-papper.component';
import { UpdatePapperComponent } from './components/private/shared/papper/update-papper/update-papper.component';
import { StockListComponent } from './components/private/shared/stock/stock-list/stock-list.component';
import { AddStockComponent } from './components/private/shared/stock/add-stock/add-stock.component';
import { UpdateStockComponent } from './components/private/shared/stock/update-stock/update-stock.component';
import { HomeComponent } from './components/public/home/home.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { NavbarComponent } from './components/public/navbar/navbar.component';
import { CarsComponent } from './components/public/cars/cars.component';
import { LoginComponent } from './components/public/login/login.component';
import { RequestDeviceComponent } from './components/public/request-device/request-device.component';
import { AboutUsComponent } from './components/public/about-us/about-us.component';
import { OutTeamComponent } from './components/public/out-team/out-team.component';
import { Page404Component } from './components/public/page404/page404.component';
import { AppBarComponent } from './components/private/shared/app-bar/app-bar.component';
import { SideBarComponent } from './components/private/shared/side-bar/side-bar.component';
import { TopBarComponent } from './components/private/shared/top-bar/top-bar.component';
import { ProfileComponent } from './components/private/shared/client/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCarComponent,
    CarListComponent,
    UpdateCarComponent,
    UpdateUserComponent,
    AddUserComponent,
    UserListComponent,
    DashboardComponent,
    ClientListComponent,
    AddClientComponent,
    UpdateClientComponent,
    PapperListComponent,
    AddPapperComponent,
    UpdatePapperComponent,
    StockListComponent,
    AddStockComponent,
    UpdateStockComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    CarsComponent,
    LoginComponent,
    RequestDeviceComponent,
    AboutUsComponent,
    OutTeamComponent,
    Page404Component,
    AppBarComponent,
    SideBarComponent,
    TopBarComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

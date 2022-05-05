import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSingleComponent } from './container-principale/user-single/user-single.component';
import { UserListComponent } from './container-principale/user-container/user-list/user-list.component';
import { UserContainerComponent } from './container-principale/user-container/user-container.component';
import { OrderContainerComponent } from './container-2/order-container/order-container.component';
import { OrderSingleComponent } from './container-2/order-single/order-single.component';
import { OrderListComponent } from './container-2/order-list/order-list.component';
import { OrderDetailComponent } from './container-2/order-detail/order-detail.component';
import { UserDetailComponent } from './container-principale/user-container/user-detail/user-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    UserListComponent,
    UserSingleComponent,
    OrderContainerComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent,
    UserContainerComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

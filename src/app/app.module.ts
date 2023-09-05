import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';

// import { AgmCoreModule } from '@agm/core';



import { CarComponent } from './components/car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    // // AgmCoreModule.forRoot({
    // //   apikey: ''
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

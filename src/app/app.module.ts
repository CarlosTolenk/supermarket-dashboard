import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";

// Angular Material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

// Routes
import {AppRoutingModule} from './app-routing.module';

// Components
import {AppComponent} from './app.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {RouterModule} from "@angular/router";
import {AuthGuard} from "./pages/auth/guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}

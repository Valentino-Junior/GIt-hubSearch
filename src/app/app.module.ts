import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SearchComponent } from './search/search.component';
import { CUserComponent } from './c-user/c-user.component';
import { CRepositoryComponent } from './c-repository/c-repository.component';
import { CHomeComponent } from './c-home/c-home.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './highlight.directive';
import { FormsModule } from '@angular/forms';
import { DurationCountPipe } from './duration-count.pipe';
import { NgHttpLoaderModule } from 'ng-http-loader';

// import { NgProgressModule } from '@ngx-progressbar/core';
// import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundPageComponent,
    SearchComponent,
    CUserComponent,
    CRepositoryComponent,
    CHomeComponent,
    HighlightDirective,
    DurationCountPipe


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    NgHttpLoaderModule.forRoot() 
    // NgProgressModule.forRoot(),
    // NgProgressHttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

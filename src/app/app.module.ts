import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from'./app-routing.module';
import { QuizzoneComponent } from './quizzone/quizzone.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    LoginComponent,
    QuizzoneComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizzoneComponent } from './quizzone/quizzone.component';


const routes: Routes = [{path: 'quizzone',component: QuizzoneComponent},
                        {path: 'login',component: LoginComponent},
                        {path: 'about',component: AboutComponent},
                        {path: 'quiz',component:QuizComponent},
                        {path: '',redirectTo:'/quizzone',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

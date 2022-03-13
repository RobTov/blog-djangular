import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostLoadingComponent } from './components/post-loading/post-loading.component';
import { PostsComponent } from './components/posts/posts.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { 
  MatCardModule,
  MatCard,
  MatCardImage,
  MatCardTitle,
  MatCardContent
 } from "@angular/material/card";


const appRoutes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'new', component: NewPostComponent },
  { path: '**', component: NotFoundComponent }
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostLoadingComponent,
    PostsComponent,
    NewPostComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

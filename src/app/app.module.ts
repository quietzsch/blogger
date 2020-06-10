// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { GoogleApiModule, NG_GAPI_CONFIG } from 'ng-gapi';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from 'src/material/material.module';
import { gapiClientConfig } from './config/google-api.config';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

// Components
import { AppComponent } from './app.component';
import { MainComponent } from './features/main/container/main.component';
import { LoginComponent } from './features/login/login.component';
import { BlogOverviewComponent } from './features/header/components/blog-overview/blog-overview.component';
import { HeaderComponent } from './features/header/container/header.component';
import { PostOverviewComponent } from './features/post-overview/container/post-overview.component';
import { SearchComponent } from './features/header/components/search/search.component';
import { PostItemComponent } from './features/post-overview/components/post-item/post-item.component';
import { PostDialogComponent } from './features/post-dialog/post-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    PostOverviewComponent,
    BlogOverviewComponent,
    HeaderComponent,
    SearchComponent,
    PostItemComponent,
    PostDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig,
    }),
  ],
  entryComponents: [
    PostDialogComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from "./app.routes";
import { LoaderInterceptor } from "./interceptors/loader-interceptor.service";

@NgModule({
  declarations: [AppComponent, Page1Component, Page2Component, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SlimLoadingBarModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverageQueryComponent } from './components/coverage-query/coverage-query.component';
import { CoverageResultComponent } from './components/coverage-result/coverage-result.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverageQueryComponent,
    CoverageResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
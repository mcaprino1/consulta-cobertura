import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoverageQueryComponent } from './components/coverage-query/coverage-query.component';
import { CoverageResultComponent } from './components/coverage-result/coverage-result.component';

const routes: Routes = [
  //{path: '', redirectTo: 'consulta'},
  {path: '', component: CoverageQueryComponent},
  {path: 'consulta', component: CoverageQueryComponent},
  {path: 'resultado-cobertura', component: CoverageResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

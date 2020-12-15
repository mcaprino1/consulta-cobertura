import { Component, OnInit } from '@angular/core';
import { RegionModel } from 'src/app/models/region.model'
import { CountyModel } from 'src/app/models/county.model'
import { CoverageService } from 'src/app/services/coverage/coverage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coverage-query',
  templateUrl: './coverage-query.component.html',
  styleUrls: ['./coverage-query.component.css']
})
export class CoverageQueryComponent implements OnInit {
  regiones: Array<RegionModel>;
  comunas: Array<CountyModel>;
  regionEstablecida: boolean;
  comunaElegida: string;

  constructor(
    private service: CoverageService,
    private router: Router
  ) { }

  llenarComunas(region: string): void {
    console.log('retrieving selected region option: ' + region);
    this.regionEstablecida = true;
    this.comunas = new Array<CountyModel>();
    this.service.obtenerComunas(region)
    .then(
      (data) => data.coverageAreas.forEach(
        c => this.comunas.push(new CountyModel(c.countyCode, c.coverageName, c.ineCountyCode, c.regionCode))
    ));
  }

  setComuna(comuna: string): void {
    this.comunaElegida = comuna;
  }

  consultar(): void {
    const tieneCobertura = this.service.validarComuna(this.comunaElegida);
    console.log((!tieneCobertura ? 'NO ' : '') + 'tiene cobertura');
    this.router.navigateByUrl('/resultado-cobertura?cobertura=' + tieneCobertura);
  }

  ngOnInit(): void {
    this.regionEstablecida = false;
    this.regiones = new Array<RegionModel>();
    this.service.obtenerRegiones()
    .then(
      (data) => data.regions.forEach(
        r => this.regiones.push(new RegionModel(r.regionId, r.regionName, r.ineRegionCode))
    ));
  }

}
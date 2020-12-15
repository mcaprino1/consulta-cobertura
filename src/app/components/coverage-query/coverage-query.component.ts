import { Component, OnInit } from '@angular/core';
import { RegionModel } from 'src/app/models/region.model'
import { CountyModel } from 'src/app/models/county.model'
import { CoverageService } from 'src/app/services/coverage/coverage-service';

@Component({
  selector: 'app-coverage-query',
  templateUrl: './coverage-query.component.html',
  styleUrls: ['./coverage-query.component.css']
})
export class CoverageQueryComponent implements OnInit {
  regiones: Array<RegionModel>;
  comunas: Array<CountyModel>;
  regionSelected: boolean;

  constructor(
    private service: CoverageService
  ) { }

  populateCounties(selectedRegion: string): void {
    console.log('retrieving selected region option: ' + selectedRegion);
    this.regionSelected = true;    
    this.comunas = new Array<CountyModel>();
    this.service.obtenerComunas(selectedRegion)
    .then(
      (data) => data.coverageAreas.forEach(
        r => this.comunas.push(new CountyModel(r.countyCode, r.coverageName, r.ineCountyCode, r.regionCode))
    ));
  }

  ngOnInit(): void {
    this.regionSelected = false;
    this.regiones = new Array<RegionModel>();
    this.service.obtenerRegiones()
    .then(
      (data) => data.regions.forEach(
        r => this.regiones.push(new RegionModel(r.regionId, r.regionName, r.ineRegionCode))
    ));
  }

}
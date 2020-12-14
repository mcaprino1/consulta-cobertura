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

  constructor(
    private service: CoverageService
  ) { 
    this.regiones = new Array<RegionModel>();
    this.service.obtenerRegiones()
    .then(
      (data) => data.regions.forEach(
        r => this.regiones.push(new RegionModel(r.regionId, r.regionName, r.ineRegionCode))
    ));
  }

  populateCountiesSelect(selectedRegion: string): void {
    console.log('retrieving selected region option: ' + selectedRegion);
  }

  ngOnInit(): void {
    
  }

}

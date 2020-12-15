import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
const COVERED_MSG = 'Con cobertura de despacho';
const NOT_COVERED_MSG = 'Por el momento no es posible la entrega debido a un aumento de casos registrados de COVID-19 en esta zona';
@Component({
  selector: 'app-coverage-result',
  templateUrl: './coverage-result.component.html',
  styleUrls: ['./coverage-result.component.css']
})

export class CoverageResultComponent implements OnInit {

  cobertura: string;
  message: string;
  imageName: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.cobertura = params['cobertura'];
      if(this.cobertura === 'true'){
        this.message = COVERED_MSG;
        this.imageName = 'ok_icon.png';
      }else{
        this.message = NOT_COVERED_MSG;
        this.imageName = 'error_icon.png'; 
      }
    });
  }

}

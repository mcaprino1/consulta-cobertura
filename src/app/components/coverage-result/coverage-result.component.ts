import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coverage-result',
  templateUrl: './coverage-result.component.html',
  styleUrls: ['./coverage-result.component.css']
})

export class CoverageResultComponent implements OnInit {

  cobertura: boolean;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.cobertura = params['cobertura'];
    });
  }

}

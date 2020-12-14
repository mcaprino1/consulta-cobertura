import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coverage-result',
  templateUrl: './coverage-result.component.html',
  styleUrls: ['./coverage-result.component.css']
})
export class CoverageResultComponent implements OnInit {

  @Input() cobertura: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

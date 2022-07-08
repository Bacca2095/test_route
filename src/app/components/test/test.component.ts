import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  routeWithParams!: boolean;
  text!: string;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const { test1, test2 } = params;
      if (test1 && test2) {
        this.routeWithParams = true;
        this.executeActionIfRouteContainParams(params);
      } else {
        this.routeWithParams = false;
        this.executeActionIfRouteNotContainsParams();
      }
    });
  }

  executeActionIfRouteContainParams(params: any) {
    const objectKeys = Object.keys(params);
    const paramsToText = objectKeys
      .map((key) => `${key}=${params[key]}`)
      .join(', ');
    this.text = `This route contains the below values for query params ${paramsToText}`;
  }

  executeActionIfRouteNotContainsParams() {
    this.text = `This route not contains params`;
  }
}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SeoService } from 'src/app/core/services/seo.service';

@Component({
  selector: 'app-renting',
  templateUrl: './renting.component.html',
  styleUrls: ['./renting.component.scss']
})
export class RentingComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    private seoService: SeoService
  ) { }

  ngOnInit() {
    this.seoService.updateMetaTags('renting');
  }

}

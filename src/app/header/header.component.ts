import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params, UrlSegment } from '@angular/router';
@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})



export class HeaderComponent implements OnInit {
    @Input() page_with_two_sidebar : boolean;
    @Input() page_with_mega_menu : boolean;
    searchInput:string="Quick SearchBy ClientId";


 constructor(
      private route: ActivatedRoute,
      private router: Router) {     
  }

    ngOnInit() {

    }
    
}
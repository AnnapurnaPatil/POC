
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, UrlSegment} from '@angular/router';

@Component({
  template: ''
})
export class ForwardPage implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.navigate(
      JSON.parse(decodeURIComponent(this.route.snapshot.params['data'])), 
      { skipLocationChange: true });

    console.log("Forward Page is called");
  }
}
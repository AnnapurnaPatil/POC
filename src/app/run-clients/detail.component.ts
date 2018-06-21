import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})

export class DetailComponent implements OnInit {

 ngOnInit() {
     window.dispatchEvent(new CustomEvent('form-elements-ready'));
 }
}

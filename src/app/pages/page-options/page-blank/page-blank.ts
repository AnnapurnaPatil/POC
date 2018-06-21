import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-blank',
    templateUrl: './page-blank.html'
})

export class BlankPage implements OnInit {
    ngOnInit() {
        // window.dispatchEvent(new CustomEvent('page-blank-ready'));
        var customEvent = document.createEvent('HTMLEvents');
        customEvent.initEvent('page-blank-ready', true, true);
        document.dispatchEvent(customEvent);
    }
}
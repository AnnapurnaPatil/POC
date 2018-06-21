import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'calendar',
    templateUrl: './bootstrap-4.html',
    encapsulation: ViewEncapsulation.None
})

export class Bootstrap4Page implements OnInit {
    ngOnInit() {
        // window.dispatchEvent(new CustomEvent('bootstrap-4-ready'));
        var customEvent = document.createEvent('HTMLEvents');
        customEvent.initEvent('bootstrap-4-ready', true, true);
        document.dispatchEvent(customEvent);
    }
}
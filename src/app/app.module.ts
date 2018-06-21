import { NgModule, OnInit }         from '@angular/core';
import { BrowserModule, Title }     from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Main Component
import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { HeaderComponent }          from './header/header.component';
import { SidebarComponent }         from './sidebar/sidebar.component';
import { ContentComponent }         from './content/content.component';
import { FooterComponent }          from './footer/footer.component';
import { ThemePanelComponent }      from './theme-panel/theme-panel.component';
// import {MyFilterPipe}               from './common/myFilter.pipe';

// Dashboard
// import { DashboardV1Page }          from './pages/dashboard/v1/dashboard-v1';
// import { DashboardV2Page }          from './pages/dashboard/v2/dashboard-v2';



// Bootstrap 4
import { Bootstrap4Page }             from './pages/bootstrap-4/bootstrap-4';


// Extra Pages
// import { ExtraComingSoonPage }      from './pages/extra/extra-coming-soon/extra-coming-soon';
import { ExtraErrorPage }           from './pages/extra/extra-error/extra-error';

// Page Options
import { BlankPage }                from './pages/page-options/page-blank/page-blank';



///  Insta KYC  resolveModuleSpecifier(moduleSpecifier: ts.Expression)
import { HttpModule } from '@angular/http';
// import { LoginV2PageComponent }      from './login-v2/login-v2.component';
import { DetailComponent } from './run-clients/detail.component';


import {ForwardPage} from './utility/forward.component';




import {LocationStrategy, HashLocationStrategy} from '@angular/common';


import {DataTableModule,SharedModule} from 'primeng/primeng';

import { PdfViewerComponent } from 'ng2-pdf-viewer'
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import {OverlayPanelModule} from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import { DatePipe } from '@angular/common';

import { APP_INITIALIZER } from '@angular/core';

import {SidebarModule} from 'primeng/primeng';
import {AccordionModule} from 'primeng/primeng';

@NgModule({
  imports:       
  [
  BrowserAnimationsModule,
  NgxCarouselModule,
  BrowserModule, 
  AppRoutingModule, 
  FormsModule, 
  ReactiveFormsModule, 
  DataTableModule,
  SharedModule, 
  HttpModule,
  OverlayPanelModule,
  DropdownModule,
  CalendarModule,
  InputTextModule,
  SidebarModule,
  AccordionModule
  ],
  declarations:   [ 
  AppComponent,
  HeaderComponent, 
  SidebarComponent, 
  // LoginV2PageComponent,
  // MyFilterPipe,

  ContentComponent,
  ThemePanelComponent,
  FooterComponent,
  // DashboardV1Page,
  // DashboardV2Page,
  Bootstrap4Page,
  BlankPage,
  // ExtraComingSoonPage,
  ExtraErrorPage,
 
  DetailComponent,
 


  ForwardPage
  ],
   providers: [ Title ],
    bootstrap: [ AppComponent ]
})

export class AppModule {

  constructor(private router: Router, private titleService: Title, private route: ActivatedRoute) {
    router.events.subscribe((e) => {
      // change page title when url change
      if (e instanceof NavigationEnd) {
        var title = 'BOARDING PASS | ' + this.route.snapshot.firstChild.data['title'];
        this.titleService.setTitle(title);
        
        window.dispatchEvent(new CustomEvent('page-reload'));
       
      }
    });
  }
}
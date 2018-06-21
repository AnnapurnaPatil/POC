import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router'; 

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

// InstaKyc Modules

import { DetailComponent } from './run-clients/detail.component';


//import { BatchjobComponent }    from './batchjob/batchjob.component';



import {ForwardPage} from './utility/forward.component';

const routes: Routes = [
{ path: '', pathMatch: 'full', component: DetailComponent},
// { path: 'login-v2', component: LoginV2PageComponent, data: { title: 'Login V2 Page'} },
// { path: 'dashboard/v1', component: DashboardV1Page, data: { title: 'Dashboard V1'} },
// { path: 'dashboard/v2', component: DashboardV2Page, data: { title: 'Dashboard V2'} },
{ path: 'bootstrap-4', component: Bootstrap4Page, data: { title: 'Bootstrap 4'} },

// { path: 'extra/coming-soon', component: ExtraComingSoonPage, data: { title: 'Coming Soon Page'} },
{ path: 'extra/error', component: ExtraErrorPage, data: { title: 'Error Page'} },

{ path: 'page/blank', component: BlankPage, data: { title: 'Blank Page'} },

//{ path: 'clientdashboard/:clientId/controlrun/:runId', component: ClientKycDashboard, data: { title: 'Full Height Content' } },



//{ path: 'batchjob', component: BatchjobComponent },




{ path: 'lastrun-dashboard', component: DetailComponent },

{ path: 'forward/:data', component: ForwardPage },




];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {
}
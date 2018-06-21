import { Component, Input, AfterViewInit } from '@angular/core';
// import {MyFilterPipe} from '../common/myFilter.pipe';


@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements AfterViewInit {
  //  hideMenu : boolean;



  // constructor() {     

  //   this.hideMenu = AppSettings.demo;
  //   // alert(this.hideMenu);
  // }



    @Input() page_sidebar_transparent : boolean;
    
    // fire event sidebar-ready
    ngAfterViewInit() {
        window.dispatchEvent(new CustomEvent('sidebar-ready'));
    }
    
    // menu list
    filterargs = {title: 'Campaign Dashboard'};
       menu = [
    {   
        
        title: 'Boarding Pass',
        icon: 'fa fa-laptop',
        link: '',
        caret: 'true',
        code: 'DASHBOARD',
        submenu: [
        {
            code: 'CAMPAIGN',
            title: 'Campaign Dashboard',
            link: '/lastrun-dashboard'
        }

       
        ]
       
    }
    // , 
    // {
    //     title: 'System',
    //     icon: 'fa fa-cogs',
    //     link: '',
    //     caret: 'true',
    //     submenu: [{
    //         title: 'Batch Job Flows',
    //         link: '/batchjob'
    //     },
    //     {
    //         title: 'Logs',
    //         link: '/joblogs'
    //      },
    //       {
    //         title: 'Settings',
    //         link: '/monitor'
    //     }
        
    //     ]
    // },
    // {
    //   title:'Administrative',
    //   icon: 'fa fa-users',
    //   link: '',
    //   caret:'true',
    //   submenu:[{
    //     title:'Roles',
    //     link:'/role'
    //   },
    //   {
    //     title:'Users',
    //     link:'/users'
    //   }
      
    //   ]
    // }
  
    ];
}
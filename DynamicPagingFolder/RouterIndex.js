
import VTeachers from '../../pages/VTeachers';
import OHome from '../../pages/OgretmenPages/OHome';
import ONotifications from '../../pages/OgretmenPages/ONotifications';
import ONewNotificationPage from '../../pages/OgretmenPages/ONewNotificationPage';
import ONewEventPage from '../../pages/OgretmenPages/ONewEventPage';
import OSelectImagePage from '../../pages/OgretmenPages/OSelectImagePage';
import ODescriptionInputPage from '../../pages/OgretmenPages/ODescriptionInputPage';
import OCalendar from '../../pages/OgretmenPages/OCalendar';
import OClass from '../../pages/OgretmenPages/OClass';
import VNotifications from '../../pages/VNotifications';
import VHome from '../../pages/VHome';
import VStudy from '../../pages/VStudy';
import VCalendar from '../../pages/VCalendar';
import VClass from '../../pages/VClass';
import { mdiHome,mdiBellCircle ,mdiCalendarMonth,mdiAccount,mdiBellRing,mdiAccountGroup,mdiTrophy} from '@mdi/js';
import ODrawerContent from '../ODrawerContent';
import VDrawerContent from '../VDrawerContent';
import Roles from './Roles'
import NavigationTypes from './NavigationTypes';

export const Pages = [
    //OGRETMEN PAGES
    {
        name:'Drawer',
        roles:[Roles.OGRETMEN],
        navigationType:NavigationTypes.DRAWER,
        initial:true,
        drawerContent:ODrawerContent,
        hasSubPagesComponents:true,
        subPageIndex:0,
        subPages:[
            {
                name:'BottomTab',
                roles:[Roles.OGRETMEN],
                navigationType:NavigationTypes.BOTTOMTAB,
                initial:true,
                subPages:[
                    {   
                        tabTitle:'ANA SAYFA',
                        tabIcon:mdiHome,
                        thisBelongsRootNavigation:true,
                        name:'OHomeStack',
                        roles: [Roles.OGRETMEN],
                        navigationType:NavigationTypes.STACK,
                        initial:true,
                        subPages:[
                            {
                                name:'OHome',
                                component:OHome,
                                roles:[Roles.OGRETMEN],
                                navigationType:NavigationTypes.NOT,
                                initial:true,
                                nextPage:'ONewEventPage'
                            },
                            {
                                name:'ONewEventPage',
                                component:ONewEventPage,
                                roles:[Roles.OGRETMEN],
                                navigationType:NavigationTypes.NOT,
                                initial:false,
                                nextPage:'OSelectImagePage'
                            },
                            {
                                name:'OSelectImagePage',
                                component:OSelectImagePage,
                                roles:[Roles.OGRETMEN],
                                navigationType:NavigationTypes.NOT,
                                initial:false,
                                nextPage:'ODescriptionInputPage',
                            },
                            {
                                name:'ODescriptionInputPage',
                                component:ODescriptionInputPage,
                                roles:[Roles.OGRETMEN],
                                navigationType:NavigationTypes.NOT,
                                initial:false,
                                nextPage:null,
                            }
                        ]
                    },
                    {
                        tabTitle:'BİLDİRİM',
                        tabIcon:mdiBellCircle ,
                        thisBelongsRootNavigation:true,
                        name:'ONotificationsStack',
                        roles:[Roles.OGRETMEN],
                        navigationType:NavigationTypes.STACK,
                        initial:false,
                        subPages:[
                            {
                                name:'ONotifications',
                                component:ONotifications,
                                roles:[Roles.OGRETMEN],
                                navigationType:NavigationTypes.NOT,
                                initial:true,
                                nextPage:'ONewNotificationPage'
                            },
                            {
                                name:'ONewNotificationPage',
                                component:ONewNotificationPage,
                                roles:[Roles.OGRETMEN],
                                navigationType:NavigationTypes.NOT,
                                initial:false,
                                nextPage:null,
                            }
                        ]
                    },
                    {
                        tabTitle:'TAKVİM',
                        tabIcon:mdiCalendarMonth ,
                        thisBelongsRootNavigation:true,
                        name:'OCalendar',
                        component:OCalendar,
                        roles:[Roles.OGRETMEN],
                        navigationType:NavigationTypes.NOT,
                        initial:false,
                    },
                    {   
                        tabTitle:'SINIF',
                        tabIcon:mdiAccount,
                        thisBelongsRootNavigation:true,
                        name:'OClass',
                        component:OClass,
                        roles:[Roles.OGRETMEN],
                        navigationType:NavigationTypes.NOT,
                        initial:false,
                    }
                ]
            }
        ]
    },
    //VELI PAGES    
    {
        name:'Drawer',
        roles:[Roles.VELI],
        navigationType:NavigationTypes.DRAWER,
        drawerContent:VDrawerContent,
        initial:true,
        hasSubPagesComponents:true,
        subPageIndex:0,
        subPages:[
            {
                name:'BottomTab',
                roles:[Roles.VELI],
                navigationType:NavigationTypes.BOTTOMTAB,
                initial:true,
                subPages:[
                    {
                        tabTitle:'ANA SAYFA',
                        tabIcon:mdiHome,
                        name:'VHome',
                        component:VHome,
                        roles:[Roles.VELI],
                        thisBelongsRootNavigation:true,
                        navigationType:NavigationTypes.NOT,
                        initial:true,
                    },
                    {
                        tabTitle:'EĞİTİM',
                        tabIcon:mdiTrophy,
                        name:'VStudy',
                        component:VStudy,
                        roles:[Roles.VELI],
                        thisBelongsRootNavigation:true,
                        navigationType:NavigationTypes.NOT,
                        initial:false,
                    },
                    {
                        tabTitle:'TAKVİM',
                        tabIcon:mdiCalendarMonth,
                        name:'VCalendar',
                        component:VCalendar,
                        roles:[Roles.VELI],
                        thisBelongsRootNavigation:true,
                        navigationType:NavigationTypes.NOT,
                        initial:false,
                    },
                    {
                        tabTitle:'SINIF',
                        tabIcon:mdiAccount,
                        name:'VClass',
                        component:VClass,
                        roles:[Roles.VELI],
                        thisBelongsRootNavigation:true,
                        navigationType:NavigationTypes.NOT,
                        initial:false,
                    }
                ]
            },
            {
                tabTitle:'ÖĞRETMENLER',
                tabIcon:mdiAccountGroup,
                name:'VTeachers',
                component:VTeachers,
                roles:[Roles.VELI],
                navigationType:NavigationTypes.NOT,
                initial:false,
            },
            {
                tabTitle:'BİLDİRİMLER',
                tabIcon:mdiBellRing,
                name:'VNotifications',
                component:VNotifications,
                roles:[Roles.VELI],
                navigationType:NavigationTypes.NOT,
                initial:false,
            }
        ]
    }
] 

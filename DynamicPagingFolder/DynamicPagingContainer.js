import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import GetNavigationType from './GetNavigationType';

export default function DynamicPagingContainer({Pages,userRole}){
    const initialPage = Pages.filter(page=>page.initial && page.roles.findIndex(roleItem => userRole===roleItem) >= 0);
    return  <NavigationContainer>
                <GetNavigationType navigationSpecs={initialPage[0]}/>
            </NavigationContainer>
}
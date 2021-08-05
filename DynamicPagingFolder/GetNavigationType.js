import React from 'react';
import { DrawerNavigation } from './DrawerNavigation';
import { StackNavigation } from './StackNavigation';
import {BottomTabNavigator}  from './BottomTabNavigator';
import NavigationTypes from './NavigationTypes';

export default function GetNavigationType({route,navigationSpecs}){
    let thisNavigation;
    if(route){
        thisNavigation = route.params.navigationSpecs;
    }else{
        thisNavigation = navigationSpecs;
    }
    switch(thisNavigation.navigationType){
        case NavigationTypes.DRAWER:
            return <DrawerNavigation navigationSpecs={thisNavigation}/>
        case NavigationTypes.BOTTOMTAB: 
            return <BottomTabNavigator navigationSpecs={thisNavigation} />
        case NavigationTypes.STACK: 
            return <StackNavigation navigationSpecs={thisNavigation} />
        default:return null;
    }
}
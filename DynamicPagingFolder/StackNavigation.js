import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { v4 as uuid } from 'uuid';
import GetNavigationType from './GetNavigationType';
import NavigationTypes from './NavigationTypes';
const Stack = createStackNavigator();

const StackNavigation = ({route,navigationSpecs}) => {
    let thisNavigation;
    if(route){
        thisNavigation= route.params.navigationSpecs;
    }else{
        thisNavigation= navigationSpecs;
    }
    const initialPage = thisNavigation.subPages.filter(page=>page.initial);
    return(
        <Stack.Navigator headerMode='none' initialRouteName={initialPage[0].name} mode='card'>
            {thisNavigation.subPages.map((item)=>{
                if(item.navigationType != NavigationTypes.NOT){
                    <Stack.Screen name={item.name} component={GetNavigationType} initialParams={{ navigationSpecs: item }} key={uuid()}/>
                }else{
                    return(
                        <Stack.Screen name={item.name} component={item.component} initialParams={{ nextPage: item.nextPage }} key={uuid()}/>
                    )
                }
            })}
        </Stack.Navigator>
    );
}

export {StackNavigation}
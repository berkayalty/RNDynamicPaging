import React from 'react';
import { v4 as uuid } from 'uuid';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GetNavigationType from './GetNavigationType';
import NavigationTypes from './NavigationTypes';
const Drawer = createDrawerNavigator();

const DrawerNavigation = ({route,navigationSpecs}) => {
    let thisNavigation;
    if(route){
        thisNavigation= route.params.navigationSpecs;
    }else{
        thisNavigation= navigationSpecs;
    }
    const initialPage = thisNavigation.subPages.filter(page=>page.initial);
    const drawerContentItems=[];
    if(thisNavigation.hasSubPagesComponents){
        thisNavigation.subPages.map((item,index)=>{
            if(index===thisNavigation.subPageIndex){
                item.subPages.map((item,index)=>{
                    if(item.thisBelongsRootNavigation){
                        drawerContentItems.push(item);
                    }
                });
            }else{
                drawerContentItems.push(item)
            }
        })
    }
    return(
            <Drawer.Navigator 
                initialRouteName={initialPage[0].name}
                drawerContent={props => <navigationSpecs.drawerContent {...props} pages={drawerContentItems}/>}
            >
                {thisNavigation.subPages.map((item,index)=>{ 
                    if(item.navigationType != NavigationTypes.NOT){
                        return <Drawer.Screen name={item.name} component={GetNavigationType} initialParams={{ navigationSpecs: item }} key={uuid()}/>
                    }else{
                        console.log('DrawerNavigation not navigation type name = '+ item.name);
                        return <Drawer.Screen name={item.name} component={item.component} key={uuid()}/>
                    }
                })}
            </Drawer.Navigator>
    );
}

export {DrawerNavigation}
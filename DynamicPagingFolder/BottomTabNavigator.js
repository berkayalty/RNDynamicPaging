import React from 'react';
import { Text, View, Pressable} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Path, Svg} from 'react-native-svg';
import { v4 as uuid } from 'uuid';
import GetNavigationType from './GetNavigationType';
import NavigationTypes from './NavigationTypes';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({route,navigationSpecs})=>{
    const MyTabBar = ({ state, descriptors, navigation , pages})=>{
        const labelsArr=[];
        pages.map(item => labelsArr.push({
            title:item.tabTitle,
            icon:item.tabIcon,
        }));
        return (
            <View style={{ flexDirection: 'row',height:56,width:'100%',backgroundColor:'white'}}>
                {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = labelsArr[index].title
                    const icon = labelsArr[index].icon
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });
        
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };
        
                const onLongPress = () => {
                    navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                    });
                };
        
                return (
                    <Pressable style={{flexDirection:'column',flex:1,alignItems:'center'}}
                        onPress={onPress}
                        onLongPress={onLongPress} key={uuid()}>
                            <View style={{width:'100%',backgroundColor:isFocused ? '#EFAF55':'white',height:4}}>
        
                            </View>
                            <View style={{alignItems:'center',marginTop:4}}>
                                <Svg fill={isFocused ? '#EFAF55':'#8F9BB3'} width={24} height={24} viewBox='0 0 22 22'>
                                    <Path d={icon}></Path>
                                </Svg>
                                <Text style={{ color: isFocused ? '#EFAF55' : '#8F9BB3',textAlign:'center',fontWeight:'bold',fontSize:12,marginTop:2}}>{label}</Text>
                            </View>
                    </Pressable>
                );
                })}
            </View>
        );
    }
    let thisNavigation;
    if(route){
        thisNavigation= route.params.navigationSpecs;
    }else{
        thisNavigation= navigationSpecs;
    }
    const initialPage = thisNavigation.subPages.filter(page=>page.initial);
    return(
        <Tab.Navigator initialRouteName={initialPage[0].name}
            tabBar={(props) => <MyTabBar {...props} pages={thisNavigation.subPages}/>} tabBarOptions={{keyboardHidesTabBar:true,style:{position:'absolute'}}}
        >
            {thisNavigation.subPages.map((item) => {
                if(item.navigationType != NavigationTypes.NOT){
                    return <Tab.Screen name={item.name} component={GetNavigationType} initialParams={{ navigationSpecs: item }} key={uuid()}/>
                }else{
                    return (
                        <Tab.Screen name={item.name} component={item.component} key={uuid()}/>
                    )
                }
            })}
        </Tab.Navigator>
    );
}

export {BottomTabNavigator}
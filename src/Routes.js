import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Favorites from './pages/favorites/index';
import Home from './pages/Home/index';

import {MaterialCommunityIcons, Feather} from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator>
        
        <Tab.Screen 
        name="Estações" 
        component={Home}
        options = {{
            tabBarIcon: ({ size, color }) => (
                <MaterialCommunityIcons name="space-station" size={size} color={color}/>
            )
            }}/>  
        
        <Tab.Screen 
        name="Favoritos" 
        component={Favorites} 
        options = {{
            tabBarIcon: ({ size, color }) => (
                <Feather name="star" size={size} color={color}/>
            )
            }}/>
        
        </Tab.Navigator>
    )}
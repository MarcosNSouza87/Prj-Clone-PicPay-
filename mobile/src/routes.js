import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './components/Navigation';
import { StatusBar } from 'react-native';

export default function Routes(){
    return(
        <>
        <StatusBar barStyle="light-content" backgroundColor="#131419"/>
        <NavigationContainer>
            <Navigation/>
        </NavigationContainer>
        </>
    );
}
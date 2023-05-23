import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";
import useFetching from "../hooks/useFetching";
import { getHits, getImages  } from "../utils/api"
import LoadingPlaceholder from "../components/LoadingPlaceholder";
import {View} from "react-native";


const Stack = createStackNavigator();

export default function Navigation() {


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Gallery"
                    component={GalleryScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

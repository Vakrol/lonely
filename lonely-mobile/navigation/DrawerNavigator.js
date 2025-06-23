// navigation/DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WallScreen from '../screens/WallScreen';
import DashboardScreen from '../screens/DashboardScreen';
import { View, Text } from 'react-native';
import ProfleScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#1e1e1e',
                    width: '66%',
                },
                drawerLabelStyle: {
                    color: '#fff',
                    fontSize: 18,
                },
                headerStyle: { backgroundColor: '#121212' },
                headerTintColor: '#fff',
            }}
        >
            <Drawer.Screen name="Tablica" component={WallScreen} />
            <Drawer.Screen name="Panel główny" component={DashboardScreen} />
            {/*<Drawer.Screen name="Profil" component={ProfileScreen} />*/}
            <Drawer.Screen name="Profil">
                {() => <View><Text style={{ color: '#fff' }}>👤 Tu będzie profil</Text></View>}
            </Drawer.Screen>
            <Drawer.Screen name="Profilowanie Postów">
                {() => <View><Text style={{ color: '#fff' }}>📊 Tu będą ankiety</Text></View>}
            </Drawer.Screen>
            <Drawer.Screen name="Czaty">
                     {() => <View><Text style={{ color: '#fff' }}>💬 Tu będą czaty</Text></View>}
            </Drawer.Screen>
            <Drawer.Screen name="Wyloguj się">
                {() => <View><Text style={{ color: '#fff' }}>🚪 Wylogowywanie</Text></View>}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
}

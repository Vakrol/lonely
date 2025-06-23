import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import DrawerNavigator from './navigation/DrawerNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <PaperProvider theme={DarkTheme}>
            <NavigationContainer theme={DarkTheme}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Welcome" component={WelcomeScreen} />
                    <Stack.Screen name="Dashboard" component={DrawerNavigator} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

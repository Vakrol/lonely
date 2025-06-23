// screens/WelcomeScreen.js
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

export default function WelcomeScreen({ navigation }) {
    const spinAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(spinAnim, {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();

        // Po 4 sek. przejście do następnego ekranu (np. Logowanie)
        setTimeout(() => {
            navigation.replace('Dashboard'); // przygotujemy Login później//
        }, 4000);
    }, []);

    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.circle, { transform: [{ rotate: spin }] }]} />
            <Text style={styles.text}>LonelyNet</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 20,
        borderColor: '#000',
        borderTopColor: '#fff',
        marginBottom: 40,
    },
    text: {
        fontSize: 32,
        color: '#3b82f6', // lekki niebieski (Tailwindowy "blue-500")
        fontWeight: 'bold',
    },
});

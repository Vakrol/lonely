// screens/ProfileScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, Switch } from 'react-native';

const tagOptions = [
    'Depresja',
    'Samotność',
    'ADHD',
    'Motywacja',
    'Trauma',
    'Memiczne treści',
    'Sztuka',
    'Inspiracja',
];

export default function ProfileScreen() {
    const [selectedTags, setSelectedTags] = useState([]);
    const [showEmail, setShowEmail] = useState(false);
    const [showInstagamProfile, setShowInstagamProfile] = useState(false);

    const toggleTag = (tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    const savePreferences = () => {
        console.log('Preferencje zapisane:', selectedTags);
        // Tu docelowo zapiszesz do backendu lub AsyncStorage
    };

    const saveOrofile = async () => {
        const data = {
            ...selectedTags,
            show_email: showEmail,
            showInstagamProfile: showInstagamProfile,
        }

        const response = await fetch('http://127.0.0.1:8000/api/profile', {
            method: 'PUT',
            headers: {
                Authhorization: 'Bearer $(token)',
                'Content-Type': 'application-json'
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>🎯 Twoje preferencje treści</Text>
            <Text style={styles.subtitle}>Zaznacz, jakie tematy Cię interesują:</Text>

            {tagOptions.map((tag) => (
                <TouchableOpacity
                    key={tag}
                    style={[
                        styles.tagButton,
                        selectedTags.includes(tag) && styles.tagButtonSelected,
                    ]}
                    onPress={() => toggleTag(tag)}
                >
                    <Text
                        style={[
                            styles.tagText,
                            selectedTags.includes(tag) && styles.tagTextSelected,
                        ]}
                    >
                        {tag}
                    </Text>
                </TouchableOpacity>
            ))}

            <View style={styles.switchContainer}>
                <Text style={styles.label}>📧 Pokazuj mój e-mail publicznie</Text>
                <Switch
                    value={showEmail}
                    onValueChange={(value) => setShowEmail(value)}
                />
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.label}>📧 Pokazuj mój instagram profil publicznie</Text>
                <Switch
                    value={showInstagamProfile}
                    onValueChange={(value) => setShowInstagamProfile(value)}
                />
            </View>
            <View style={{ marginTop: 24 }}>
                <Button title="Zapisz preferencje" onPress={savePreferences} />
            </View>

            {selectedTags.length > 0 && (
                <View style={{ marginTop: 24 }}>
                    <Text style={styles.subtitle}>Wybrane tagi:</Text>
                    <Text style={{ color: '#ccc' }}>{selectedTags.join(', ')}</Text>
                </View>
            )}
        </ScrollView>
    );
}

import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const dummyPostTemplates = [
    {
        user: 'Kasia',
        content: 'Właśnie skończyłam czytać świetną książkę.',
        avatar: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
    },
    {
        user: 'Anna',
        content: 'Dzisiaj piękna pogoda!',
        avatar: 'https://cdn-icons-png.flaticon.com/512/616/616554.png',
    },
    {
        user: 'Marek',
        content: 'Uwielbiam ten serwis!',
        avatar: 'https://cdn-icons-png.flaticon.com/512/616/616408.png',
    },
    {
        user: 'Jan',
        content: 'Ktoś ma ochotę na kawę?',
        avatar: 'https://cdn-icons-png.flaticon.com/512/616/616438.png',
    },
];

export default function WallScreen() {
    const [posts, setPosts] = useState([]);
    const listRef = useRef(null);
    const postCount = useRef(1);

    useEffect(() => {
        for (let i = 0; i < 5; i++) {
            addNewPost();
        }

        const interval = setInterval(() => {
            addNewPost();
            scrollToBottom();
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const addNewPost = () => {
        const template =
            dummyPostTemplates[
                Math.floor(Math.random() * dummyPostTemplates.length)
                ];
        const newPost = {
            id: `post-${postCount.current++}`,
            user: template.user,
            content: template.content,
            time: 'teraz',
            avatar: template.avatar,
        };
        setPosts((prev) => [...prev, newPost]); // ⬅️ dodajemy NA KONIEC
    };

    const scrollToBottom = () => {
        if (listRef.current) {
            listRef.current.scrollToEnd({ animated: true });
        }
    };

    const renderItem = ({ item }) => (
        <Animatable.View
            animation="fadeInUp"
            duration={500}
            easing="ease-in-out"
            style={styles.card}
        >
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.postContent}>
                <Text style={styles.username}>{item.user}</Text>
                <Text style={styles.content}>{item.content}</Text>
                <Text style={styles.time}>{item.time}</Text>
            </View>
        </Animatable.View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                ref={listRef}
                data={posts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
                // ⛔ NIE używaj inverted
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#1f1f1f',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 12,
    },
    postContent: {
        flex: 1,
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#e5e5e5',
    },
    content: {
        fontSize: 15,
        color: '#d1d5db',
        marginVertical: 4,
    },
    time: {
        fontSize: 13,
        color: '#9ca3af',
    },
});

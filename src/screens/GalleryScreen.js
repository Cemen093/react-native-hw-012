import React from 'react';
import { View, Text, Button } from 'react-native';

const GalleryScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Галерея</Text>
            <Button
                title="Перейти на экран галереи"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}

export default GalleryScreen
